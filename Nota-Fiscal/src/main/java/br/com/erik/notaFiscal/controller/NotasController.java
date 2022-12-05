package br.com.erik.notaFiscal.controller;


import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.erik.notaFiscal.modelo.Nota;
import br.com.erik.notaFiscal.repository.NotaRepository;

@RestController
@RequestMapping("/nota")
public class NotasController {
	
	@Autowired
	private NotaRepository notaRepository;
	
	@GetMapping
	public List<Nota> lista(){
		List<Nota> notas = notaRepository.findAll();
		return notas;
	}
	
	@PostMapping
	public ResponseEntity<Nota> cadastrar(@RequestBody Nota nota, UriComponentsBuilder uriBuilder){
		nota = notaRepository.save(nota);
		URI uri = uriBuilder.path("/nota/{id}").buildAndExpand(nota.getId()).toUri();
		return ResponseEntity.created(uri).body(nota);
	}
	
	@PutMapping
	public Nota atualizaNota(@RequestBody Nota nota) {
		return notaRepository.save(nota);
	}
	
	@DeleteMapping("/{id}")
	@Transactional
	public ResponseEntity<?> deletaNota(@PathVariable Long id) {
		Optional<Nota> nota = notaRepository.findById(id);
		if(nota.isPresent()) {
			notaRepository.deleteById(id);
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.notFound().build();
	}
}

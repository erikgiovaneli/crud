package br.com.erik.notaFiscal.controller;


import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.erik.notaFiscal.modelo.Cliente;
import br.com.erik.notaFiscal.repository.ClienteRepository;

@RestController
@RequestMapping("/Cliente")
public class ClienteController {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@GetMapping
	public List<Cliente> lista(){
		List<Cliente> clientes = clienteRepository.findAll();
		return clientes;
	}
	
	@PostMapping
	public ResponseEntity<Cliente> cadastrar(@RequestBody @Validated Cliente cliente, UriComponentsBuilder uriBuilder){
		cliente = clienteRepository.save(cliente);
		URI uri = uriBuilder.path("/Notas/{id}").buildAndExpand(cliente.getId()).toUri();
		return ResponseEntity.created(uri).body(cliente);
	}
	
	@PutMapping
	public Cliente atualizaCliente(@RequestBody Cliente cliente) {
		return clienteRepository.save(cliente);
	}
	
	@DeleteMapping("/{id}")
	@Transactional
	public ResponseEntity<?> deletaCliente(@PathVariable Long id) {
		Optional<Cliente> cliente = clienteRepository.findById(id);
		if(cliente.isPresent()) {
			clienteRepository.deleteById(id);
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.notFound().build();
	}

}


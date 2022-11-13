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

import br.com.erik.notaFiscal.modelo.Produto;
import br.com.erik.notaFiscal.repository.ProdutoRepository;

@RestController
@RequestMapping("/Produto")
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	@GetMapping
	public List<Produto> lista(){
		List<Produto> produtos = produtoRepository.findAll();
		return produtos;
	}
	
	@PostMapping
	public ResponseEntity<Produto> cadastrar(@RequestBody Produto produto, UriComponentsBuilder uriBuilder){
		produto = produtoRepository.save(produto);
		URI uri = uriBuilder.path("/Notas/{id}").buildAndExpand(produto.getId()).toUri();
		return ResponseEntity.created(uri).body(produto);
	}
	
	@PutMapping
	public Produto atualizaProduto(@RequestBody Produto produto) {
		return produtoRepository.save(produto);
	}
	
	@DeleteMapping("/{id}")
	@Transactional
	public ResponseEntity<?> deletaProduto(@PathVariable Long id) {
		Optional<Produto> produto = produtoRepository.findById(id);
		if(produto.isPresent()) {
			produtoRepository.deleteById(id);
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.notFound().build();
	}
}


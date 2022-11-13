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

import br.com.erik.notaFiscal.modelo.Item;
import br.com.erik.notaFiscal.repository.ItemRepository;

@RestController
@RequestMapping("/Item")
public class ItemController {
	
	@Autowired
	private ItemRepository itemsRepository;
	
	@GetMapping
	public List<Item> lista(){
		List<Item> items = itemsRepository.findAll();
		return items;
	}
	
	@PostMapping
	public ResponseEntity<Item> cadastrar(@RequestBody Item item, UriComponentsBuilder uriBuilder){
		item = itemsRepository.save(item);
		URI uri = uriBuilder.path("/Item/{id}").buildAndExpand(item.getId()).toUri();
		return ResponseEntity.created(uri).body(item);
	}
	
	@PutMapping
	public Item atualizaProduto(@RequestBody Item item) {
		return itemsRepository.save(item);
	}
	
	@DeleteMapping("/{id}")
	@Transactional
	public ResponseEntity<?> deletaProduto(@PathVariable Long id) {
		Optional<Item> item = itemsRepository.findById(id);
		if(item.isPresent()) {
			itemsRepository.deleteById(id);
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.notFound().build();
	}
}


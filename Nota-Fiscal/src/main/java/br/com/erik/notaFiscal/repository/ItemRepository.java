package br.com.erik.notaFiscal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.erik.notaFiscal.modelo.Item;

public interface ItemRepository extends JpaRepository<Item, Long>{
	
}

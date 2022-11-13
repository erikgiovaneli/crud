package br.com.erik.notaFiscal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.erik.notaFiscal.modelo.Nota;

public interface NotaRepository extends JpaRepository<Nota, Long>{
	
}

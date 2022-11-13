package br.com.erik.notaFiscal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.erik.notaFiscal.modelo.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{

	Cliente findByNome(Cliente nome);
}

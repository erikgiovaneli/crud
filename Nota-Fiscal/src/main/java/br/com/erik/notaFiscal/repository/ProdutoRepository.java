package br.com.erik.notaFiscal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.erik.notaFiscal.modelo.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{

	Produto findByDescricao(Produto descricao);

}

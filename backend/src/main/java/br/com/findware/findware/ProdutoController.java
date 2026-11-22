package br.com.findware.findware;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/produtos")
@CrossOrigin(origins = "http://localhost:4200")
public class ProdutoController {

    @Autowired
    private ProdutoRepository repository;

    @GetMapping
    public List<Produto> listarTodos() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarPorId(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Produto adicionar(@RequestBody Produto produto) {
        return repository.save(produto);
    }

    @PostMapping("/lista")
    public List<Produto> adicionarVarios(@RequestBody List<Produto> produtos) {
        return repository.saveAll(produtos);
    }

    @PostMapping("/finalizar")
    @Transactional
    public ResponseEntity<?> finalizarCompra(@RequestBody List<ItemCompraDTO> itens) {
        List<Produto> produtosAtualizados = new ArrayList<>();

        for (ItemCompraDTO item : itens) {
            Produto produto = repository.findById(item.getProdutoId()).orElse(null);

            if (produto == null) {
                return ResponseEntity.badRequest()
                        .body(Map.of("erro", "Produto não encontrado (ID: " + item.getProdutoId() + ")."));
            }

            if (produto.getEstoque() < item.getQuantidade()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("erro", "Estoque insuficiente para: " + produto.getNome()
                                + " (disponível: " + produto.getEstoque() + ")."));
            }

            produto.setEstoque(produto.getEstoque() - item.getQuantidade());
            produtosAtualizados.add(produto);
        }

        repository.saveAll(produtosAtualizados);
        return ResponseEntity.ok(Map.of("mensagem", "Compra finalizada com sucesso!"));
    }

    public static class ItemCompraDTO {
        private Long produtoId;
        private int quantidade;

        public Long getProdutoId() { return produtoId; }
        public void setProdutoId(Long produtoId) { this.produtoId = produtoId; }

        public int getQuantidade() { return quantidade; }
        public void setQuantidade(int quantidade) { this.quantidade = quantidade; }
    }
}
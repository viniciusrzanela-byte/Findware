package br.com.findware.findware;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/produtos")
@CrossOrigin(origins = "http://localhost:4200")
public class ProdutoController 
{
    @Autowired
    private ProdutoRepository repository;
    @GetMapping
    public List<Produto> listarTodos() 
    {
        return repository.findAll();
    }
    @PostMapping
    public Produto adicionar(@RequestBody Produto produto) 
    {
        return repository.save(produto);
    }
    @PostMapping("/lista")
    public List<Produto> adicionarVarios(@RequestBody List<Produto> produtos)
    {
        return repository.saveAll(produtos);
    }
}
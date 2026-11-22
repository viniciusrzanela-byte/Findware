package br.com.findware.findware;

import jakarta.persistence.*;

@Entity
public class Produto 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String imagem;
    private Integer desconto;
    private String novo;
    private String original;
    private String categoria;
    private String tipo;
    private Integer estoque;
    @Column(columnDefinition = "TEXT")
    private String descricao;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getImagem() { return imagem; }
    public void setImagem(String imagem) { this.imagem = imagem; }

    public Integer getDesconto() { return desconto; }
    public void setDesconto(Integer desconto) { this.desconto = desconto; }

    public String getNovo() { return novo; }
    public void setNovo(String novo) { this.novo = novo; }

    public String getOriginal() { return original; }
    public void setOriginal(String original) { this.original = original; }

    public String getCategoria() { return categoria; }
    public void setCategoria(String categoria) { this.categoria = categoria; }

    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }

    public Integer getEstoque() { return estoque; }
    public void setEstoque(Integer estoque) { this.estoque = estoque; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
}

import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CarrinhoService, Produto } from '../carrinho/carrinho.service';

@Component
({
  selector: 'app-detalhe',
  imports: [],
  templateUrl: './detalhe.html',
  styleUrl: './detalhe.css',
})
export class Detalhe implements OnInit 
{
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  carrinho = inject(CarrinhoService);
  produto = signal<Produto | undefined>(undefined);
  mensagemCarrinho = '';
  erroEstoque = false;
  ngOnInit() 
  {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) 
    {
      this.http.get<Produto>(`http://localhost:8080/api/produtos/${id}`).subscribe
      ({
        next: (dados) => {this.produto.set(dados);},
        error: (err) => {console.error('Erro ao buscar detalhes do produto:', err);},
      });
    }
  }
  adicionarAoCarrinho() 
  {
    const produtoAtual = this.produto();
    if (!produtoAtual) {return;}
    const resultado = this.carrinho.adicionar(produtoAtual);
    if (!resultado.adicionado) 
    {
      this.erroEstoque = true;
      this.mensagemCarrinho =resultado.motivo === 'sem_estoque'  
        ? 'Produto sem estoque no momento.'
        : `Limite de estoque atingido (${resultado.quantidade} no carrinho).`;
      return;
    }
    this.erroEstoque = false;
    this.mensagemCarrinho = `✓ Produto adicionado! Quantidade no carrinho: ${resultado.quantidade}`;
  }
}
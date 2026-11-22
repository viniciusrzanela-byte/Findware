import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { CarrinhoService } from '../carrinho/carrinho.service';

export interface Produto {
  id: number;
  nome: string;
  imagem: string;
  categoria: string;
  tipo: string;
  descricao: string;
  desconto: number;
  original: string;
  novo: string;
  estoque: number;
}

@Component({
  selector: 'app-detalhe',
  imports: [],
  templateUrl: './detalhe.html',
  styleUrl: './detalhe.css',
})

export class Detalhe implements OnInit {
  private rota = inject(ActivatedRoute);
  private http = inject(HttpClient);
  private carrinho = inject(CarrinhoService);

  produto = signal<Produto | undefined>(undefined);
  carregando = signal(true);

  mensagemCarrinho = '';

  private tempoMensagem?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.rota.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      this.mensagemCarrinho = '';
      window.scrollTo(0, 0);

      if (!id) {
        this.produto.set(undefined);
        this.carregando.set(false);
        return;
      }

      this.carregando.set(true);

      this.http.get<Produto>(`http://localhost:8080/api/produtos/${id}`).subscribe({
        next: (dados) => {
          this.produto.set(dados);
          this.carregando.set(false);
        },
        error: () => {
          this.produto.set(undefined);
          this.carregando.set(false);
        },
      });
    });
  }

  adicionarAoCarrinho() {
    const produtoAtual = this.produto();

    if (produtoAtual) {
      this.carrinho.adicionar(produtoAtual);

      const item = this.carrinho.itens.find((item) => item.produto.id === produtoAtual.id);

      this.mensagemCarrinho = `Produto adicionado! Quantidade no carrinho: ${item?.quantidade}`;

      clearTimeout(this.tempoMensagem);

      this.tempoMensagem = setTimeout(() => {this.mensagemCarrinho = '';}, 2000);
    }
  }
}

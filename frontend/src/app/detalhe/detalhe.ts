import { Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { Oferta, OFERTAS } from '../produto';
import { CarrinhoService } from '../carrinho/carrinho.service';

@Component({
  selector: 'app-detalhe',
  imports: [],
  templateUrl: './detalhe.html',
  styleUrl: './detalhe.css',
})
export class Detalhe {
  private rota = inject(ActivatedRoute);
  private carrinho = inject(CarrinhoService);

  mensagemCarrinho = '';

  private tempoMensagem?: ReturnType<typeof setTimeout>;

  private parametros = toSignal(this.rota.paramMap, {
    initialValue: this.rota.snapshot.paramMap,
  });

  produto = computed(() => {
    const id = Number(this.parametros().get('id'));

    return OFERTAS.find((produto) => produto.id === id);
  });

  constructor() {
    effect(() => {
      this.parametros();

      this.mensagemCarrinho = '';

      window.scrollTo(0, 0);
    });
  }

  adicionarAoCarrinho() {
    const produtoAtual = this.produto();

    if (produtoAtual) {
      this.carrinho.adicionar(produtoAtual);

      const item = this.carrinho.itens.find((item) => item.produto.id === produtoAtual.id);

      this.mensagemCarrinho = `Produto adicionado! Quantidade no carrinho: ${item?.quantidade}`;

      clearTimeout(this.tempoMensagem);

      this.tempoMensagem = setTimeout(() => {
        this.mensagemCarrinho = '';
      }, 2000);
    }
  }
}

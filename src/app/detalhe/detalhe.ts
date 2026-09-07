import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta, OFERTAS } from '../produto';
import { CarrinhoService } from '../carrinho/carrinho.service';

@Component
({
  selector: 'app-detalhe',
  imports: [],
  templateUrl: './detalhe.html',
  styleUrl: './detalhe.css',
})

export class Detalhe
{
  private rota = inject(ActivatedRoute);
  private carrinho = inject(CarrinhoService);
  mensagemCarrinho = '';
  private tempoMensagem?: ReturnType<typeof setTimeout>;
  produto?: Oferta;

  constructor()
  {
    const id = Number(this.rota.snapshot.paramMap.get('id'));

    this.produto = OFERTAS.find(
        produto => produto.id === id
    );
  }

  adicionarAoCarrinho()
  {
      if (this.produto)
      {
          this.carrinho.adicionar(this.produto);
          const item = this.carrinho.itens.find(item => item.produto.id === this.produto!.id);

          this.mensagemCarrinho =`Produto adicionado! Quantidade no carrinho: ${item?.quantidade}`;

          clearTimeout(this.tempoMensagem);

          this.tempoMensagem = setTimeout(() =>
          {
              this.mensagemCarrinho = '';
          }, 2000);
      }
  }
}

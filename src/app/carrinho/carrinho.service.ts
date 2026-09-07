import { Injectable } from '@angular/core';
import { Oferta } from '../produto';

export type ItemCarrinho =
{
    produto: Oferta;
    quantidade: number;
};

@Injectable({
    providedIn: 'root'
})

export class CarrinhoService
{
    itens: ItemCarrinho[] = [];
    adicionar(produto: Oferta)
    {
        const item = this.itens.find(
            item => item.produto.id === produto.id
        );

        if (item)
        {
            item.quantidade++;
        }
        else
        {
            this.itens.push({
                produto: produto,
                quantidade: 1
            });
        }
    }

    limpar()
    {
        this.itens = [];
    }
}

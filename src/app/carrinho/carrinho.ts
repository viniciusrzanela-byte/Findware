import { Component, inject } from '@angular/core';
import { CarrinhoService } from '../carrinho/carrinho.service';

@Component({
    selector: 'app-carrinho',
    imports: [],
    templateUrl: './carrinho.html',
    styleUrl: './carrinho.css'
})

export class Carrinho
{
    carrinho = inject(CarrinhoService);
    mostrarPopup = false;

    limparCesta()
    {
        this.carrinho.limpar();
    }

    converterPreco(preco: string): number
    {
        return Number(
            preco
                .replace('R$', '')
                .replace(/\./g, '')
                .replace(',', '.')
                .trim()
        );
    }

    calcularValor(preco: string, quantidade: number): number
    {
        return this.converterPreco(preco) * quantidade;
    }

    calcularTotal(): number
    {
        let total = 0;
        for (const item of this.carrinho.itens)
        {
            total += this.calcularValor(
                item.produto.novo,
                item.quantidade
            );
        }

        return total;
    }

    formatarPreco(valor: number): string
    {
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }

    finalizar()
    {
        if (this.carrinho.itens.length === 0)
        {
            return;
        }

        this.mostrarPopup = true;
    }

    fecharPopup()
    {
        this.mostrarPopup = false;
    }
}

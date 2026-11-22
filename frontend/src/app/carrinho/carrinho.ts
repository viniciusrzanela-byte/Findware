import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarrinhoService } from '../carrinho/carrinho.service';

@Component({
  selector: 'app-carrinho',
  imports: [],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {
  carrinho = inject(CarrinhoService);
  private http = inject(HttpClient);

  mostrarPopup = false;
  mensagemErro = '';
  finalizando = false;

  limparCesta() {
    this.carrinho.limpar();
    this.mensagemErro = '';
  }

  converterPreco(preco: string): number {
    return Number(preco.replace('R$', '').replace(/\./g, '').replace(',', '.').trim());
  }

  calcularValor(preco: string, quantidade: number): number {
    return this.converterPreco(preco) * quantidade;
  }

  calcularTotal(): number {
    let total = 0;
    for (const item of this.carrinho.itens) {
      total += this.calcularValor(item.produto.novo, item.quantidade);
    }

    return total;
  }

  formatarPreco(valor: number): string {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  finalizar() {
    if (this.carrinho.itens.length === 0 || this.finalizando) {
      return;
    }

    this.finalizando = true;
    this.mensagemErro = '';

    const payload = this.carrinho.itens.map((item) => ({
      produtoId: item.produto.id,
      quantidade: item.quantidade,
    }));

    this.http.post('http://localhost:8080/api/produtos/finalizar', payload).subscribe({
      next: () => {
        this.carrinho.limpar();
        this.mostrarPopup = true;
        this.finalizando = false;
      },
      error: (err) => {
        this.mensagemErro = err.error?.erro || 'Não foi possível finalizar a compra.';
        this.finalizando = false;
      },
    });
  }

  fecharPopup() {
    this.mostrarPopup = false;
  }
}

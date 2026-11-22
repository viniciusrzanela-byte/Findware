import { Injectable } from '@angular/core';

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

export type ItemCarrinho = {
  produto: Produto;
  quantidade: number;
};

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private readonly STORAGE_KEY = 'findware_carrinho';
  itens: ItemCarrinho[] = this.carregarStorage();

  private carregarStorage(): ItemCarrinho[] {
    const salvo = localStorage.getItem(this.STORAGE_KEY);
    return salvo ? JSON.parse(salvo) : [];
  }

  private salvarStorage() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.itens));
  }

  adicionar(produto: Produto) {
    if (produto.estoque <= 0) {
      return;
    }

    const item = this.itens.find((item) => item.produto.id === produto.id);

    if (item) {
      if (item.quantidade < produto.estoque) {
        item.quantidade++;
      }
    } else {
      this.itens.push({
        produto: produto,
        quantidade: 1,
      });
    }

    this.salvarStorage();
  }

  limpar() {
    this.itens = [];
    localStorage.removeItem(this.STORAGE_KEY);
  }
}

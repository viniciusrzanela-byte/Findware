import { Injectable } from '@angular/core';

export interface Produto 
{
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

export type ItemCarrinho = 
{
  produto: Produto;
  quantidade: number;
};

export type ResultadoAdicionar = 
{
  adicionado: boolean;
  motivo?: 'sem_estoque' | 'limite_estoque';
  quantidade: number;
};

@Injectable
({
  providedIn: 'root',
})
export class CarrinhoService 
{
  private readonly STORAGE_KEY = 'findware_carrinho';
  itens: ItemCarrinho[] = this.carregarStorage();
  private carregarStorage(): ItemCarrinho[] 
  {
    const salvo = localStorage.getItem(this.STORAGE_KEY);
    return salvo ? JSON.parse(salvo) : [];
  }
  private salvarStorage() {localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.itens));}
  adicionar(produto: Produto): ResultadoAdicionar 
  {
    if ((produto.estoque ?? 0) <= 0) {return {adicionado: false, motivo: 'sem_estoque', quantidade: 0};}
    const item = this.itens.find((item) => item.produto.id === produto.id);
    if (item) 
    {
      if (item.quantidade < produto.estoque) 
      {
        item.quantidade++;
        this.salvarStorage();
        return {adicionado: true,quantidade: item.quantidade};
      }
      return {adicionado: false, motivo: 'limite_estoque', quantidade: item.quantidade};
    }
    this.itens.push
    ({
      produto: produto,
      quantidade: 1,
    });
    this.salvarStorage();
    return {adicionado: true, quantidade: 1};
  }

  diminuir(produtoId: number)
  {
    const index = this.itens.findIndex((item) => item.produto.id === produtoId);
    if (index !== -1) 
      {
      if (this.itens[index].quantidade > 1) {this.itens[index].quantidade--;} 
      else {this.itens.splice(index, 1);}
      this.salvarStorage();
    }
  }
  limpar() 
  {
    this.itens = [];
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
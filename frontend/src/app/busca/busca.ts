import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface Produto 
{
  id: number;
  nome: string;
  imagem: string;
  desconto: number;
  novo: string;
  original: string;
  categoria: string;
  tipo: string;
  estoque: number;
}

@Component({
  selector: 'app-busca',
  imports: [RouterLink],
  templateUrl: './busca.html',
  styleUrl: './busca.css',
})
export class Busca 
{
  termo = '';
  resultados: Produto[] = [];

  constructor(private rota: ActivatedRoute, private detector: ChangeDetectorRef, private http: HttpClient) 
  {
    this.rota.queryParamMap.subscribe((parametros) => 
    {
      const pesquisa = parametros.get('q')?.trim() || '';
      const tipo = parametros.get('tipo')?.trim() || '';
      const categoria = parametros.get('categoria')?.trim() || '';

      this.http.get<Produto[]>('http://localhost:8080/api/produtos').subscribe({
        next: (produtosBanco) => 
        {
          if (tipo) 
          {
            this.termo = tipo;
            this.resultados = produtosBanco.filter((produto) => produto.tipo.toLowerCase() === tipo.toLowerCase());
          } 
          else if (categoria) 
          {
            this.termo = categoria;
            this.resultados = produtosBanco.filter((produto) => produto.categoria.toLowerCase() === categoria.toLowerCase());
          } 
          else 
          {
            this.termo = pesquisa;
            const termoPesquisa = pesquisa.toLowerCase();
            this.resultados = produtosBanco.filter((produto) =>
              produto.nome.toLowerCase().includes(termoPesquisa) ||
              produto.tipo.toLowerCase().includes(termoPesquisa) ||
              produto.categoria.toLowerCase().includes(termoPesquisa),
            );
          }
          window.scrollTo(0, 0);
          this.detector.markForCheck();
        },
        error: (erro) => {console.error('Erro ao buscar produtos na pesquisa', erro);}
      });
    });
  }
  Erro(event: Event) {(event.target as HTMLImageElement).src = 'erro.png';}
}
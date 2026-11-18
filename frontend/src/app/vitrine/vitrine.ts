import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
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

@Component
({
  selector: 'app-vitrine',
  imports: [RouterLink],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine implements OnInit {
  ofertas: Produto[] = [];
  mostrarTodos = false;

  constructor(private http: HttpClient, private detector: ChangeDetectorRef) {}

  ngOnInit(): void 
  {
    this.http.get<Produto[]>('http://localhost:8080/api/produtos').subscribe({
      next: (dados) => {
        const produtosFormatados = dados.map((item: any) => ({
          ...item,
          tipo: item.tipo || item.categoria
        }));
        
        this.ofertas = this.embaralharSemRepetirTipo(produtosFormatados);
        this.detector.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao buscar produtos do backend', erro);
      }
    });
  }

  get ofertasVisiveis() 
  {
    return this.mostrarTodos ? this.ofertas : this.ofertas.slice(0, 4);
  }

  private embaralhar(lista: string[]) {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  private embaralharSemRepetirTipo(lista: Produto[]) {
    if (!lista || lista.length === 0) return [];

    const tipos = [...new Set(lista.map((produto) => produto.tipo))];
    const primeiraRodada = this.embaralhar(tipos);
    let segundaRodada = this.embaralhar(tipos);
    
    if (tipos.length > 1) {
      while (primeiraRodada[primeiraRodada.length - 1] === segundaRodada[0]) {
        segundaRodada = this.embaralhar(tipos);
      }
    }

    const resultado: Produto[] = [];
    for (const tipo of primeiraRodada) 
    {
      const produtosDoTipo = lista.filter((produto) => produto.tipo === tipo);
      if (produtosDoTipo[0]) resultado.push(produtosDoTipo[0]);
    }
    for (const tipo of segundaRodada) 
    {
      const produtosDoTipo = lista.filter((produto) => produto.tipo === tipo);
      if (produtosDoTipo[1]) resultado.push(produtosDoTipo[1]); 
    }
    return resultado;
  }

  Erro(event: Event) {
    const imagem = event.target as HTMLImageElement;
    if (!imagem.src.endsWith('/erro.png')) {
      imagem.src = 'erro.png';
    }
  }
}
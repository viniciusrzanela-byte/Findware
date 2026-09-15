import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Oferta, OFERTAS } from '../produto';

@Component({
  selector: 'app-busca',
  imports: [RouterLink],
  templateUrl: './busca.html',
  styleUrl: './busca.css',
})
export class Busca {
  termo = '';
  resultados: Oferta[] = [];
  constructor(
    private rota: ActivatedRoute,
    private detector: ChangeDetectorRef,
  ) {
    this.rota.queryParamMap.subscribe((parametros) => {
      const pesquisa = parametros.get('q')?.trim() || '';
      const tipo = parametros.get('tipo')?.trim() || '';
      const categoria = parametros.get('categoria')?.trim() || '';
      if (tipo) {
        this.termo = tipo;
        this.resultados = OFERTAS.filter(
          (produto) => produto.tipo.toLowerCase() === tipo.toLowerCase(),
        );
      } else if (categoria) {
        this.termo = categoria;
        this.resultados = OFERTAS.filter(
          (produto) => produto.categoria.toLowerCase() === categoria.toLowerCase(),
        );
      } else {
        this.termo = pesquisa;
        const termoPesquisa = pesquisa.toLowerCase();
        this.resultados = OFERTAS.filter(
          (produto) =>
            produto.nome.toLowerCase().includes(termoPesquisa) ||
            produto.tipo.toLowerCase().includes(termoPesquisa) ||
            produto.categoria.toLowerCase().includes(termoPesquisa),
        );
      }
      window.scrollTo(0, 0);
      this.detector.markForCheck();
    });
  }
  Erro(event: Event) {
    (event.target as HTMLImageElement).src = 'erro.png';
  }
}

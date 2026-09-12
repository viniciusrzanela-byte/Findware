import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Oferta, OFERTAS } from '../produto';

@Component({
  selector: 'app-busca',
  imports: [RouterLink],
  templateUrl: './busca.html',
  styleUrl: './busca.css',
})

export class Busca 
{
  termo = '';
  resultados: Oferta[] = [];
  constructor(private rota: ActivatedRoute, private detector: ChangeDetectorRef)
  {
    this.rota.queryParamMap.subscribe(parametros =>
    {
      this.termo = parametros.get('q')?.trim() || '';
      const pesquisa = this.termo.toLowerCase();
      this.resultados = OFERTAS.filter(produto => produto.nome.toLowerCase().includes(pesquisa) || produto.tipo.toLowerCase().includes(pesquisa) || produto.categoria.toLowerCase().includes(pesquisa));
      window.scrollTo(0, 0);
      this.detector.detectChanges();
    }
    );
  }
  Erro(event : Event)
  {
    (event.target as HTMLImageElement).src = 'erro.png';
  }
}
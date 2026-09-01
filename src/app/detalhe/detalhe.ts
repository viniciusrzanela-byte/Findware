import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta, OFERTAS } from '../produto';

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
  produto?: Oferta;
  constructor()
  {
    const id = Number(this.rota.snapshot.paramMap.get('id'));
    this.produto =  OFERTAS.find(produto => produto.id === id);
  }
}
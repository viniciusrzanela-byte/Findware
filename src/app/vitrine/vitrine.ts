import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Oferta, OFERTAS } from '../produto';

@Component({
  selector: 'app-vitrine',
  imports: [RouterLink],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})

export class Vitrine
{
  ofertas = this.embaralharSemRepetirTipo(OFERTAS);
  private embaralhar(lista: string[])
  {
    const copia = [...lista];

    for (let i = copia.length - 1; i > 0; i--)
    {
      const j = Math.floor(Math.random() * (i + 1));

      [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
  }

  mostrarTodos = false;

  get ofertasVisiveis() {
    return this.mostrarTodos
      ? this.ofertas
      : this.ofertas.slice(0, 4);
  }

  private embaralharSemRepetirTipo(lista: Oferta[])
  {
    const tipos = [...new Set(lista.map(produto => produto.tipo))];

    const primeiraRodada = this.embaralhar(tipos);
    let segundaRodada = this.embaralhar(tipos);

    while (primeiraRodada[primeiraRodada.length - 1] === segundaRodada[0])
    {
      segundaRodada = this.embaralhar(tipos);
    }

    const resultado: Oferta[] = [];

    for (const tipo of primeiraRodada)
    {
      const produtosDoTipo = lista.filter(produto => produto.tipo === tipo);

      resultado.push(produtosDoTipo[0]);
    }

    for (const tipo of segundaRodada)
    {
      const produtosDoTipo = lista.filter(produto => produto.tipo === tipo);

      resultado.push(produtosDoTipo[1]);
    }

    return resultado;
  }

  Erro(event: Event)
  {
    const imagem = event.target as HTMLImageElement;
    if (!imagem.src.endsWith('/erro.png'))
    {
      imagem.src = 'erro.png';
    }
  }
}

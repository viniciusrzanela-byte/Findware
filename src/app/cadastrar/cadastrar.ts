import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component
({
  selector: 'app-cadastrar',
  imports: [RouterLink, FormsModule],
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css',
})

export class Cadastrar 
{
  mostrar = false;
  esconder = false;
  cpf = '';
  senha = '';
  confirmar = '';
  Validar(cpf: string): boolean
  {
    const numeros = cpf.replace(/\D/g, '');
    if (numeros.length !== 11)
    {
      return false;
    }
    if (/^(\d)\1{10}$/.test(numeros))
    {
      return false;
    }
    const calcular = (tamanho: number) =>
    {
      let soma = 0;
      for (let i = 0; i < tamanho; i++)
      {
        soma += Number(numeros[i]) * (tamanho + 1 - i);
      }
      const resto = (soma * 10) % 11;
      return resto === 10 ? 0 : resto;
    };
    return (calcular(9) === Number(numeros[9]) && calcular(10) === Number(numeros[10]));
  }
  get valido()
  {
    return this.Validar(this.cpf);
  }
  get iguais()
  {
    return this.senha === this.confirmar;
  }
}
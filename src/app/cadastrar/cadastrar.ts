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
  nome = '';
  nomeMeio ='';
  sobrenome = '';
  cpf = '';
  email = '';
  mostrar = false;
  esconder = false;
  senha = '';
  confirmar = '';
  exibir = false;
  tentativa = false;
  DDIe = '🇧🇷 +55';
  telefone = '';

  vNome(valor: string): boolean
  {
    return /^[\p{L}\s]+$/u.test(valor.trim());
  }
  vEmail(valor: string): boolean
  {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim());
  }
  Validar(cpf: string): boolean
  {
    cpf = cpf.trim();
    const formato = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!formato.test(cpf))
    {
      return false;
    }
    const numeros = cpf.replace(/\D/g, '');
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
    return (
    calcular(9) === Number(numeros[9]) &&
    calcular(10) === Number(numeros[10])
    );
  }
  get nomeV()
  {
    return this.vNome(this.nome);
  }
  get nomeMeioV()
  {
    return !this.nomeMeio.trim() || this.vNome(this.nomeMeio)
  }
  get sobrenomeV()
  {
    return this.vNome(this.sobrenome);
  }
  get valido()
  {
    return this.Validar(this.cpf);
  }
  get telefoneV()
  {
    return /^\d{8,15}$/.test(this.telefone);
  }
  get emailV()
  {
    return this.vEmail(this.email);
  }
  get senhaV()
  {
    const senha = this.senha;
    return (senha.length >= 8 && /[A-Z]/.test(senha) && /[a-z]/.test(senha) && /[0-9]/.test(senha) && /[^A-Za-z0-9]/.test(senha));
  }
  get iguais()
  {
    return this.senha === this.confirmar;
  }
}
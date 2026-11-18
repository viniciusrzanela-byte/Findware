import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component
({
  selector: 'app-cadastrar',
  imports: [FormsModule],
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css',
})

export class Cadastrar
{
  nome = '';
  nomeMeio = '';
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
  endereco = '';
  popup = false;
  popupTitulo = '';
  popupMensagem = '';
  cadastroSucesso = false;

  constructor(private http: HttpClient, private router: Router, private detector: ChangeDetectorRef, private auth: AuthService){}
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
    const formato =/^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
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
    return (calcular(9) === Number(numeros[9]) && calcular(10) === Number(numeros[10]));
  }
  get nomeV()
  {
    return this.vNome(this.nome);
  }
  get nomeMeioV()
  {
    return (!this.nomeMeio.trim() || this.vNome(this.nomeMeio));
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
  fecharPopup() 
  {
    this.popup = false;
    if (this.cadastroSucesso) {this.router.navigate(['/']);}
  }
  cadastrar()
  {
    this.tentativa = true;
    if (!this.nomeV || !this.sobrenomeV || !this.nomeMeioV || !this.valido || !this.telefoneV || !this.emailV || !this.enderecoV || !this.senhaV || !this.iguais) {return;}
    const novoUsuario = 
    {
      nome: this.nome,
      nomeMeio: this.nomeMeio,
      sobrenome: this.sobrenome,
      cpf: this.cpf,
      telefone: this.telefone,
      email: this.email,
      endereco: this.endereco,
      senha: this.senha
    };
    this.http.post('http://localhost:8080/api/usuarios/cadastrar', novoUsuario)
    .subscribe
    ({
      next: (usuarioCriado) => 
      {
        this.auth.login(usuarioCriado);
        this.popupTitulo = 'Cadastro realizado!';
        this.popupMensagem = 'Bem-vindo(a) à Findware. Clique em OK para fazer login.';
        this.cadastroSucesso = true;
        this.popup = true;
        this.detector.detectChanges();
      },
      error: (erro) => 
      {
        this.popupTitulo = 'Erro ao cadastrar';
        this.popupMensagem = typeof erro.error === 'string' ? erro.error : 'Verifique os dados informados.';
        this.cadastroSucesso = false;
        this.popup = true;
        this.detector.detectChanges();
      }
    });
  }
  get enderecoV() 
  {
    return this.endereco.trim().length > 0;
  }
}
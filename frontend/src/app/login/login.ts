import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component
({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login 
{
  mostrar = false;
  email = '';
  senha = '';
  tentativa = false;
  popup = false;
  popupTitulo = '';
  popupMensagem = '';
  popupErro = false;

  constructor(private http: HttpClient, private router: Router, private auth: AuthService, private cdr: ChangeDetectorRef) {}
  vEmail(valor: string): boolean {return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim());}
  get emailV() {return this.vEmail(this.email);}

  abrirPopup(titulo: string, mensagem: string, erro = true) 
  {
    this.popupTitulo = titulo;
    this.popupMensagem = mensagem;
    this.popupErro = erro;
    this.popup = true;
    this.cdr.detectChanges();
  }

  fecharPopup() {this.popup = false;}

  entrar() 
  {
    this.tentativa = true;

    if (!this.email.trim() || !this.senha.trim()) 
    {
      this.abrirPopup('Campos obrigatórios', 'Preencha seu e-mail e sua senha para entrar.');
      return;
    }

    if (!this.emailV) 
    {
      this.abrirPopup('E-mail inválido', 'Digite um endereço de e-mail válido.');
      return;
    }

    this.http.post('http://localhost:8080/api/usuarios/login', 
    {
      email: this.email.trim(),
      senha: this.senha,
    })
    .subscribe
    ({
      next: (resposta) => 
      {
        this.auth.login(resposta);
        this.router.navigate(['/']);
      },
      error: (err) => 
      {
        const mensagem = typeof err.error === 'string' && err.error.trim()
          ? err.error
          : 'E-mail ou senha inválidos!';
        this.abrirPopup('Erro ao entrar', mensagem, true);
      },
    });
  }
}
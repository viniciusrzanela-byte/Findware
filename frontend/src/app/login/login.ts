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

  constructor(private http: HttpClient, private router: Router, private auth: AuthService, private detector: ChangeDetectorRef) {}

  vEmail(valor: string): boolean {return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim());}

  get emailV() {
    return this.vEmail(this.email);
  }

  entrar() 
  {
    this.tentativa = true;
    if (!this.emailV || !this.senha.trim()) {return;}
    const credenciais = {email: this.email, senha: this.senha};
    this.http.post('http://localhost:8080/api/usuarios/login', credenciais)
    .subscribe
    ({
      next: (resposta: any) => 
      {
        this.auth.login(resposta);
        this.router.navigate(['/']);
      },
      error: (erro) => {alert(erro.error || 'E-mail ou senha inválidos!');}
    });
  }
}
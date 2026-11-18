import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component
({
  selector: 'app-esqueceu',
  imports: [FormsModule],
  templateUrl: './esqueceu.html',
  styleUrl: './esqueceu.css',
})
export class Esqueceu 
{
  email = '';
  emailE = '';
  tentativa = false;
  codigo = '';
  cGerado = '';
  cEnviado = false;
  cErrado = false;
  enviando = false;
  popup = false;
  popupTitulo = '';
  popupMensagem = '';
  popupErro = false;

  constructor(private router: Router, private http: HttpClient, private detector: ChangeDetectorRef) {}

  vEmail(valor: string): boolean {return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim());}
  emailMudou() 
  {
    const emailAtual = this.email.trim().toLowerCase();
    if (this.cEnviado && emailAtual !== this.emailE) 
    {
      this.cEnviado = false;
      this.codigo = '';
      this.cGerado = '';
      this.cErrado = false;
      this.popup = false;
    }
  }
  enviarC(reenviar = false) 
  {
    this.tentativa = true;
    if (!this.emailV || this.enviando) {return;}
    const emailA = this.email.trim().toLowerCase();
    if (!reenviar && this.cEnviado && emailA === this.emailE) {return;}
    const novoCodigo = Math.floor(100000 + Math.random() * 900000).toString();
    this.enviando = true;

    this.http.post('http://localhost:8080/api/usuarios/enviar-codigo', {email: emailA,codigo: novoCodigo})
    .subscribe
    ({
      next: () => 
      {
        this.enviando = false;
        this.cGerado = novoCodigo;
        this.emailE = emailA;
        this.codigo = '';
        this.cEnviado = true;
        this.cErrado = false;
        this.popupTitulo = 'Código enviado!';
        this.popupMensagem = 'Enviamos um código de 6 dígitos para ' + emailA + '. Verifique sua caixa de entrada ou spam.';
        this.popupErro = false;
        this.popup = true;
        this.detector.detectChanges();
      },
      error: (erro) => 
      {
        this.enviando = false;
        this.popupTitulo = 'Atenção';
        this.popupMensagem = (typeof erro.error === 'string' && erro.error.trim())
          ? erro.error
          : 'Não foi possível enviar o código.';
        this.popupErro = true;
        this.popup = true;
        this.detector.detectChanges();
      }
    });
  }
  confirmarC() 
  {
    if (!this.cEnviado) {return;}
    if (!this.codigoV) 
    {
      this.cErrado = true;
      return;
    }
    if (this.codigo === this.cGerado) {this.router.navigate(['/']);} 
    else {this.cErrado = true;}
  }
  get emailV() {return this.vEmail(this.email);}
  get codigoV() {return /^\d{6}$/.test(this.codigo);}
  get enviarBloqueado() {return this.enviando || (this.cEnviado && this.email.trim().toLowerCase() === this.emailE);}
}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esqueceu',
  imports: [FormsModule],
  templateUrl: './esqueceu.html',
  styleUrl: './esqueceu.css',
})
export class Esqueceu {
  email = '';
  emailE = '';
  tentativa = false;
  codigo = '';
  cGerado = '';
  cEnviado = false;
  cErrado = false;
  popup = false;

  constructor(private router: Router) {}
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
    if (!this.emailV) {return;}
    const emailA = this.email.trim().toLowerCase();
    if (!reenviar && this.cEnviado && emailA === this.emailE) {return;}
    this.cGerado = Math.floor(100000 + Math.random() * 900000).toString();
    this.emailE = emailA;
    this.codigo = '';
    this.cEnviado = true;
    this.cErrado = false;
    this.popup = true;
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
  get enviarBloqueado() {return this.cEnviado && this.email.trim().toLowerCase() === this.emailE;}
}
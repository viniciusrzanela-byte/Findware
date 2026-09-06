import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esqueceu',
  imports: [FormsModule],
  templateUrl: './esqueceu.html',
  styleUrl: './esqueceu.css',
})
export class Esqueceu 
{
  email = '';
  tentativa = false;
  codigo = '';
  cGerado = '';
  cEnviado = false;
  cErrado = false;
  popup = false;
  constructor(private router: Router){}
  vEmail(valor: string): boolean
  {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim());
  }
  enviarC()
  {
    this.tentativa = true;
    if (!this.emailV)
    {
      return;
    }
    this.cGerado = Math.floor(100000 + Math.random() * 900000).toString();
    this.cEnviado = true;
    this.cErrado = false;
    this.popup = true;
  }
  confirmarC()
  {
    if(!this.cEnviado)
    {
      return;
    }
    if (!this.codigoV)
    {
      this.cErrado = true;
      return;
    }
    if(this.codigo === this.cGerado)
    {
      this.router.navigate(['/']);
    }
    else
    {
      this.cErrado = true;
    }
  }
  get emailV()
  {
    return this.vEmail(this.email);
  }
  get codigoV()
  {
    return /^\d{6}$/.test(this.codigo);
  } 
}
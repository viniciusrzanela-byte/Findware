import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService 
{
  usuarioLogado = signal<any>(this.carregarUsuario());

  private carregarUsuario() 
  {
    if (typeof localStorage === 'undefined') return null;
    const dados = localStorage.getItem('usuarioLogado');
    return dados ? JSON.parse(dados) : null;
  }

  login(usuario: any) 
  {
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    this.usuarioLogado.set(usuario);
  }

  logout() 
  {
    localStorage.removeItem('usuarioLogado');
    this.usuarioLogado.set(null);
  }
}
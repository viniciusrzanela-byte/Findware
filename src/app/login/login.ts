import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  mostrar = false;
  email = '';
  senha = '';
  tentativa = false;

  constructor(private router: Router) {}

  vEmail(valor: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim());
  }

  get emailV() {
    return this.vEmail(this.email);
  }

  entrar() {
    this.tentativa = true;

    if (this.emailV && this.senha.trim()) {
      this.router.navigate(['/']);
    }
  }
}

import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component
({
  selector: 'app-esqueceu',
  imports: [FormsModule, RouterLink],
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
  codigoConfirmado = false;
  novaSenha = '';
  confirmarSenha = '';
  erroSenha = '';
  salvandoSenha = false;
  senhaRedefinida = false;
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
      this.codigoConfirmado = false;
      this.novaSenha = '';
      this.confirmarSenha = '';
      this.erroSenha = '';
      this.popup = false;
    }
  }

  enviarC(reenviar = false) 
  {
    this.tentativa = true;
    if (!this.emailV || this.enviando) return;
    const emailA = this.email.trim().toLowerCase();
    if (!reenviar && this.cEnviado && emailA === this.emailE) return;
    const novoCodigo = Math.floor(100000 + Math.random() * 900000).toString();
    this.enviando = true;
    this.http.post('http://localhost:8080/api/usuarios/enviar-codigo', {email: emailA, codigo: novoCodigo,})
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
        this.codigoConfirmado = false;
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
      this.popupMensagem = typeof erro.error === 'string' && erro.error.trim()
        ? erro.error
        : 'Não foi possível enviar o código.';
      this.popupErro = true;
      this.popup = true;
      this.detector.detectChanges();
      },
    });
  }

  confirmarC() 
  {
    if (!this.cEnviado) return;
    if (!this.codigoV) 
    {
      this.cErrado = true;
      return;
    }
    if (this.codigo === this.cGerado) 
    {
      this.cErrado = false;
      this.codigoConfirmado = true;
    } 
    else {this.cErrado = true;}
  }

  salvarNovaSenha() 
  {
    this.erroSenha = '';
    if (!this.senhaV) 
    {
      this.erroSenha ='A senha deve ter no mínimo 8 caracteres, com letra maiúscula, minúscula, número e caractere especial.';
      return;
    }
    if (!this.iguais) 
    {
      this.erroSenha = 'As senhas não coincidem.';
      return;
    }
    if (this.salvandoSenha) return;
    this.salvandoSenha = true;

    this.http.put('http://localhost:8080/api/usuarios/redefinir-senha', 
    {
      email: this.emailE,
      novaSenha: this.novaSenha,
    })
    .subscribe
    ({next: () => 
      {
        this.salvandoSenha = false;
        this.senhaRedefinida = true;
        this.popupTitulo = 'Senha atualizada!';
        this.popupMensagem = 'Sua senha foi alterada com sucesso. Já pode fazer login.';
        this.popupErro = false;
        this.popup = true;
        this.detector.detectChanges();
      },
      error: (erro) => 
      {
        this.salvandoSenha = false;
        this.popupTitulo = 'Erro ao atualizar';
        this.popupMensagem = typeof erro.error === 'string' && erro.error.trim()
          ? erro.error
          : 'Não foi possível salvar a nova senha.';
        this.popupErro = true;
        this.popup = true;
        this.detector.detectChanges();
      },
    });
  }

  fecharPopup() 
  {
    this.popup = false;
    if (this.senhaRedefinida) {this.router.navigate(['/login']);}
  }
  get emailV() {return this.vEmail(this.email);}
  get codigoV() {return /^\d{6}$/.test(this.codigo);}
  get senhaV(): boolean {return ( this.novaSenha.length >= 8 && /[A-Z]/.test(this.novaSenha) && /[a-z]/.test(this.novaSenha) && /\d/.test(this.novaSenha) && /[^A-Za-z0-9]/.test(this.novaSenha));}
  get iguais(): boolean {return this.novaSenha !== '' && this.novaSenha === this.confirmarSenha;}
  get enviarBloqueado() {return (this.enviando || (this.cEnviado && this.email.trim().toLowerCase() === this.emailE));}
}
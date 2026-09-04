import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component
({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App
{
  protected readonly title = signal('eletronicos');

  audio?: HTMLAudioElement;
  musicaTocando = false;
  tempoAtual = 0;
  duracaoMusica = 0;
  musicaAtual = 0;

  musicas = [
    'musica1.mp3',
    'musica2.mp3',
    'musica3.mp3',
    'musica4.mp3',
    'musica5.mp3'
];

  toggleMusica()
  {
      if (!this.audio)
      {
          this.tocarMusica();
          return;
      }

      if (this.audio.paused)
      {
          this.audio.play();
          this.musicaTocando = true;
      }
      else
      {
          this.audio.pause();
          this.musicaTocando = false;
      }
  }

  voltarMusica()
  {
      if (!this.audio)
      {
          return;
      }

      if (this.audio.currentTime > 3)
      {
          this.audio.currentTime = 0;
          this.tempoAtual = 0;
      }
      else
      {
          this.musicaAtual--;

          if (this.musicaAtual < 0)
          {
              this.musicaAtual = this.musicas.length - 1;
          }

          this.tocarMusica();
      }
  }


  proximaMusica()
  {
      this.musicaAtual++;

      if (this.musicaAtual >= this.musicas.length)
      {
          this.musicaAtual = 0;
      }

      this.tocarMusica();
  }


  alterarTempo(event: Event)
  {
      const valor = Number((event.target as HTMLInputElement).value);

      this.tempoAtual = valor;

      if (this.audio)
      {
          this.audio.currentTime = valor;
      }
  }

  tocarMusica()
  {
      this.audio?.pause();

      this.audio = new Audio(this.musicas[this.musicaAtual]);

      this.audio.addEventListener('loadedmetadata', () =>
      {
          this.duracaoMusica = this.audio!.duration;
      });

      this.audio.addEventListener('timeupdate', () =>
      {
          this.tempoAtual = this.audio!.currentTime;
      });

      this.audio.addEventListener('ended', () =>
      {
          this.proximaMusica();
      });

      this.audio.play();
      this.musicaTocando = true;
      this.tempoAtual = 0;
  }
}

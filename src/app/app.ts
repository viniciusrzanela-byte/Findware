import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
selector: 'app-root',
imports: [RouterLink, RouterOutlet],
templateUrl: './app.html',
styleUrl: './app.css'
})

export class App
{
    protected readonly title = signal('eletronicos');
    constructor(public router: Router){}
    audio?: HTMLAudioElement;
    musica = 'musica1.mp3';
    mutado = false;
    saudacoes = true;
    tocarMusica()
    {
        this.audio?.pause();
        this.audio = new Audio(this.musica);
        this.audio.loop = true;
        this.audio.muted = this.mutado;
        this.audio.play()
        .catch(() =>
        {
            console.log('Não foi possível iniciar a música.');
        });
    }
    toggleMudo()
    {
        this.mutado = !this.mutado;
        if (this.audio)
        {
            this.audio.muted = this.mutado;
        }
    }
    fSaudacoes()
    {
        this.saudacoes = false;
        this.tocarMusica();
    }
}
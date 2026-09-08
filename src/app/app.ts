import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
selector: 'app-root',
imports: [RouterLink, RouterOutlet],
templateUrl: './app.html',
styleUrl: './app.css'
})

export class App implements OnInit
{
    protected readonly title = signal('eletronicos');
    constructor(public router: Router){}
    audio?: HTMLAudioElement;
    musica = 'musica1.mp3';
    mutado = false;
    saudacoes = true;
    ngOnInit()
    {
        document.body.style.overflow = 'hidden';
        const navegacao = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navegacao?.type === 'reload')
        {
            this.router.navigate(['/']);
        }
    }
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
        document.body.style.overflow = '';
        this.tocarMusica();
    }
}
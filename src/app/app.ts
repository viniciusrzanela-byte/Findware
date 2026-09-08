import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OFERTAS } from './produto';

@Component({
selector: 'app-root',
imports: [RouterLink, RouterOutlet, FormsModule],
templateUrl: './app.html',
styleUrl: './app.css'
})

export class App implements OnInit
{
    protected readonly title = signal('eletronicos');
    constructor(public router: Router){}
    audio?: HTMLAudioElement;
    mutado = false;
    saudacoes = true;
    musica = 'musica1.mp3';
    pesquisa = '';
    aberta = false;
    ngOnInit()
    {
        history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
        const navegacao = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navegacao?.type === 'reload')
        {
            this.router.navigate(['/']);
        }
    }
    pesquisar()
    {
        const termo = this.pesquisa.trim();
        if (termo)
        {
            this.aberta = false;
            this.router.navigateByUrl('/busca?q=' + encodeURIComponent(termo));
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
    selecionar(termo : string)
    {
        this.pesquisa = termo;
        this.pesquisar();
    }
    abrir(id : number)
    {
        this.aberta = false;
        this.router.navigate(['/detalhe', id]);
    }
    fechar()
    {
        setTimeout(() =>
        {
            this.aberta = false;
        }, 150);
    }
    get resultados()
    {
        const termo = this.pesquisa.trim().toLowerCase();
        if (!termo)
        {
            return [];
        }
        return OFERTAS.filter(produto => produto.nome.toLowerCase().includes(termo) || produto.tipo.toLowerCase().includes(termo) || produto.categoria.toLowerCase().includes(termo)).slice(0, 3);
    }
}
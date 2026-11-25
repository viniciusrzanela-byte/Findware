import { Component, HostListener, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from './services/produto.service';
import { AuthService } from './services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit 
{
  protected readonly title = signal('eletronicos');
  produtos: any[] = [];
  constructor(public router: Router, public auth: AuthService, private produtoService: ProdutoService, private http: HttpClient) {}
  audio?: HTMLAudioElement;
  saudacoes = true;
  mutado = false;
  musica = 'musica1.mp3';
  volume = 0.4;
  ultimoVolume = 0.4;
  pesquisa = '';
  aberta = false;
  fotoExpandida = false;

  ngOnInit() 
  {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    this.router.events.subscribe((event) => 
    {
      if (event instanceof NavigationEnd && event.urlAfterRedirects === '/') 
      {
        this.aberta = false;
        this.pesquisa = '';
      }
    });
    this.produtoService.listarProdutos().subscribe
    ({
      next: (dados) => {this.produtos = dados;},
      error: (erro) => {console.error('Erro ao carregar produtos na pesquisa:', erro);}
    });
    const navegacao = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navegacao?.type === 'reload') {this.router.navigate(['/']);}
  }
  pesquisar() {
    const elemento = document.activeElement;
    if (elemento instanceof HTMLElement) {elemento.blur();}
    const termo = this.pesquisa.trim();
    if (termo) 
      {
      this.aberta = false;
      this.router.navigateByUrl('/busca?q=' + encodeURIComponent(termo));
    } 
    else 
    {
      this.aberta = false;
      this.pesquisa = '';
      this.router.navigate(['/']);
    }
  }
  tocarMusica() 
  {
    this.audio?.pause();
    this.audio = new Audio(this.musica);
    this.audio.loop = true;
    this.audio.muted = this.mutado;
    this.audio.volume = this.volume;
    this.audio.play().catch(() => {console.log('Não foi possível iniciar a música.');});
  }
  alterarVolume(event: Event) 
  {
    const input = event.target as HTMLInputElement;
    this.volume = Number(input.value);

    if (this.volume > 0) 
    {
      this.ultimoVolume = this.volume;
      this.mutado = false;
    }

    if (this.audio) 
    {
      this.audio.volume = this.volume;
      if (this.volume > 0) {this.audio.muted = false;}
    }
  }
  toggleMudo() {
    if (this.volume === 0) 
    {
      this.volume = this.ultimoVolume;
      this.mutado = false;

      if (this.audio) 
      {
        this.audio.volume = this.volume;
        this.audio.muted = false;
      }
      return;
    }
    this.mutado = !this.mutado;
    if (this.audio) {this.audio.muted = this.mutado;}
  }
  fSaudacoes()
  {
    this.saudacoes = false;
    document.body.style.overflow = '';
    this.tocarMusica();
  }
  selecionar(termo: string) 
  {
    this.pesquisa = termo;
    this.pesquisar();
  }
  abrir(id: number) 
  {
    this.aberta = false;
    this.router.navigate(['/detalhe', id]);
  }
  selecionarTipo(tipo: string) 
  {
    this.pesquisa = tipo;
    this.aberta = false;
    this.router.navigate(['/busca'], { queryParams: { tipo: tipo } });
  }
  selecionarCategoria(categoria: string) 
  {
    this.pesquisa = categoria;
    this.aberta = false;
    this.router.navigate(['/busca'], { queryParams: { categoria: categoria } });
  }
  selecionarFoto(event: Event) 
  {
    const input = event.target as HTMLInputElement;
    const arquivo = input.files?.[0];
    const usuario = this.auth.usuarioLogado();
    if (!arquivo || !usuario) return;
    const leitor = new FileReader();
    leitor.onload = () => 
    {
      const img = new Image();
      img.onload = () => 
      {
        const canvas = document.createElement('canvas');
        const tamanho = 256;
        canvas.width = tamanho;
        canvas.height = tamanho;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const menorLado = Math.min(img.width, img.height);
        const corteX = (img.width - menorLado) / 2;
        const corteY = (img.height - menorLado) / 2;
        ctx.drawImage(img, corteX, corteY, menorLado, menorLado, 0, 0, tamanho, tamanho);
        const fotoBase64 = canvas.toDataURL('image/jpeg', 0.8);

        this.http.put('http://localhost:8080/api/usuarios/foto',
        {
          email: usuario.email,
          foto: fotoBase64,
        })
        .subscribe
        ({
          next: () => 
          {
            this.auth.atualizarFoto(fotoBase64);
            input.value = '';
          },
          error: (erro) => console.error('Erro ao salvar foto:', erro),
        });
      };
      img.src = leitor.result as string;
    };
    leitor.readAsDataURL(arquivo);
  }
  get resultados() 
  {
    const termo = this.pesquisa.trim().toLowerCase();
    if (!termo) {return [];}
    return this.produtos.filter(
      (produto) =>
        produto.nome.toLowerCase().includes(termo) ||
        produto.tipo.toLowerCase().includes(termo) ||
        produto.categoria.toLowerCase().includes(termo),
    ).slice(0, 3);
  }
  @HostListener('document:click', ['$event'])
  clicarForaPesquisa(event: MouseEvent) 
  {
    const elemento = event.target as HTMLElement;
    if (!elemento.closest('.area-pesquisa')) {this.aberta = false;}
  }
  abrirFoto() 
  {
    this.fotoExpandida = true;
    document.body.style.overflow = 'hidden';
  }
  fecharFoto() 
  {
    this.fotoExpandida = false;
    document.body.style.overflow = '';
  }
}
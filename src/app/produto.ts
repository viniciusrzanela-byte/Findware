export type Oferta =
{
    id: number;
    categoria: string;
    tipo: string;
    desconto: number;
    imagem: string;
    nome: string;
    original: string;
    novo: string;
    descricao?: string;
};

type OfertaSemId = Omit<Oferta, 'id'>;

const ofertasSemId: OfertaSemId[] =
[
    // MÓVEIS - CELULARES
    { categoria: 'Móveis', tipo: 'Celulares', desconto: 20, imagem: 'samsung24.png', nome: 'Samsung Galaxy S24', original: 'R$ 2.243,15',
      novo: 'R$ 1.794,52',
      descricao: 'Smartphone com tela de alta qualidade, excelente desempenho e sistema de câmeras versátil. Ideal para uso diário, entretenimento e produtividade.' },
    { categoria: 'Móveis', tipo: 'Celulares', desconto: 15, imagem: 'ip16.png', nome: 'iPhone 16', original: 'R$ 4.599,00', novo: 'R$ 3.909,15',
      descricao: 'Smartphone da Apple com alto desempenho, câmeras avançadas e integração com o ecossistema Apple. Uma opção para quem busca desempenho e praticidade.' },

    // MÓVEIS - TABLETS
    { categoria: 'Móveis', tipo: 'Tablets', desconto: 18, imagem: 'tab-s9-fe.png', nome: 'Samsung Galaxy Tab S9 FE', original: 'R$ 2.799,00',
      novo: 'R$ 2.295,18',
      descricao: 'Tablet versátil para estudos, trabalho e entretenimento, com tela de qualidade e desempenho adequado para navegação, aplicativos e consumo de conteúdo.' },
    { categoria: 'Móveis', tipo: 'Tablets', desconto: 12, imagem: 'ipad10.png', nome: 'iPad 10ª geração', original: 'R$ 3.499,00', novo: 'R$ 3.079,12',
      descricao: 'Tablet da Apple desenvolvido para oferecer uma experiência fluida em estudos, produtividade, entretenimento e uso de aplicativos no dia a dia.' },

    // MÓVEIS - NOTEBOOKS
    { categoria: 'Móveis', tipo: 'Notebooks', desconto: 20, imagem: 'ideapad-3.png', nome: 'Lenovo IdeaPad 3', original: 'R$ 3.299,00',
      novo: 'R$ 2.639,20',
      descricao: 'Notebook pensado para tarefas do dia a dia, estudos e produtividade, combinando praticidade com desempenho para atividades cotidianas.' },
    { categoria: 'Móveis', tipo: 'Notebooks', desconto: 15, imagem: 'aspire-5.png', nome: 'Acer Aspire 5', original: 'R$ 3.899,00', novo: 'R$ 3.314,15',
      descricao: 'Notebook versátil para trabalho, estudos e entretenimento, oferecendo uma experiência equilibrada para diferentes tipos de tarefas.' },

    // MÓVEIS - SMARTWATCHES
    { categoria: 'Móveis', tipo: 'Smartwatches', desconto: 25, imagem: 'galaxy-watch-6.png', nome: 'Samsung Galaxy Watch 6', original: 'R$ 1.799,00',
      novo: 'R$ 1.349,25',
      descricao: 'Smartwatch desenvolvido para acompanhar sua rotina, exibindo notificações e oferecendo recursos voltados ao monitoramento de atividades e bem-estar.' },
    { categoria: 'Móveis', tipo: 'Smartwatches', desconto: 10, imagem: 'apple-watch-se.png', nome: 'Apple Watch SE', original: 'R$ 2.499,00',
      novo: 'R$ 2.249,10',
      descricao: 'Smartwatch da Apple que combina praticidade e recursos para acompanhar atividades, notificações e diferentes momentos da rotina.' },


    // COMPUTADORES - PROCESSADORES
    { categoria: 'Computadores', tipo: 'Processadores', desconto: 15, imagem: 'ryzen-5-7600.png', nome: 'AMD Ryzen 5 7600', original: 'R$ 1.399,00',
      novo: 'R$ 1.189,15', descricao: 'Processador de 6 núcleos e 12 threads voltado para computadores de alto desempenho, oferecendo ótimo equilíbrio entre desempenho em jogos e produtividade.' },
    { categoria: 'Computadores', tipo: 'Processadores', desconto: 18, imagem: 'i5-14400f.png', nome: 'Intel Core i5-14400F', original: 'R$ 1.699,00',
      novo: 'R$ 1.393,18',
      descricao: 'Processador desenvolvido para oferecer alto desempenho em jogos, produtividade e outras tarefas que exigem velocidade e capacidade de processamento.' },

    // COMPUTADORES - PLACAS-MÃE
    { categoria: 'Computadores', tipo: 'Placas-mãe', desconto: 12, imagem: 'asus-b650m.png', nome: 'ASUS TUF Gaming B650M-Plus', original: 'R$ 1.599,00',
      novo: 'R$ 1.407,12',
      descricao: 'Placa-mãe desenvolvida para computadores de alto desempenho, oferecendo uma base sólida para montagem de sistemas voltados para jogos e produtividade.' },
    { categoria: 'Computadores', tipo: 'Placas-mãe', desconto: 15, imagem: 'gigabyte-b760m.png', nome: 'Gigabyte B760M DS3H', original: 'R$ 1.099,00',
      novo: 'R$ 934,15',
      descricao: 'Placa-mãe compacta e versátil para montagem de computadores, oferecendo recursos de conectividade e suporte para diferentes configurações de hardware.' },

    // COMPUTADORES - RAM
    { categoria: 'Computadores', tipo: 'Memórias RAM', desconto: 20, imagem: 'kingston-fury-16gb.png', nome: 'Kingston Fury Beast 16GB DDR5',
      original: 'R$ 499,00', novo: 'R$ 399,20',
      descricao: 'Memória RAM voltada para computadores modernos, proporcionando maior agilidade na execução de aplicativos, jogos e tarefas simultâneas.' },
    { categoria: 'Computadores', tipo: 'Memórias RAM', desconto: 15, imagem: 'corsair-vengeance-32gb.png', nome: 'Corsair Vengeance 32GB DDR5',
      original: 'R$ 899,00', novo: 'R$ 764,15',
      descricao: 'Memória RAM de alta capacidade indicada para computadores que precisam lidar com jogos, produtividade e aplicações mais exigentes.' },

    // COMPUTADORES - GPU
    { categoria: 'Computadores', tipo: 'Placas de vídeo', desconto: 12, imagem: 'rtx-4060.png', nome: 'GeForce RTX 4060 8GB', original: 'R$ 2.399,00',
      novo: 'R$ 2.111,12',
      descricao: 'Placa de vídeo voltada para jogos e aplicações gráficas, oferecendo bom desempenho para quem busca uma experiência fluida em diferentes tipos de conteúdo.' },
    { categoria: 'Computadores', tipo: 'Placas de vídeo', desconto: 18, imagem: 'rx-7600.png', nome: 'Radeon RX 7600 8GB', original: 'R$ 2.199,00',
      novo: 'R$ 1.803,18',
      descricao: 'Placa de vídeo desenvolvida para jogos e tarefas gráficas, combinando desempenho e recursos modernos para computadores voltados ao entretenimento e produtividade.' },

    // COMPUTADORES - SSD E HD
    { categoria: 'Computadores', tipo: 'SSD e HD', desconto: 20, imagem: 'kingston-nv2-1tb.png', nome: 'Kingston NV2 SSD 1TB', original: 'R$ 499,00',
      novo: 'R$ 399,20',
      descricao: 'SSD de alta capacidade indicado para armazenar arquivos, aplicativos e jogos, proporcionando uma experiência mais ágil no uso do computador.' },
    { categoria: 'Computadores', tipo: 'SSD e HD', desconto: 15, imagem: 'seagate-2tb.png', nome: 'Seagate Barracuda HD 2TB', original: 'R$ 449,00',
      novo: 'R$ 381,65',
      descricao: 'Disco rígido com ampla capacidade de armazenamento, ideal para guardar documentos, mídias, jogos e outros arquivos do dia a dia.' },

    // COMPUTADORES - FONTES
    { categoria: 'Computadores', tipo: 'Fontes', desconto: 15, imagem: 'corsair-cx650.png', nome: 'Corsair CX650 650W', original: 'R$ 499,00',
      novo: 'R$ 424,15',
      descricao: 'Fonte de alimentação de 650W desenvolvida para fornecer energia de forma estável ao computador, sendo uma opção para diferentes configurações de uso doméstico e gamer.' },
    { categoria: 'Computadores', tipo: 'Fontes', desconto: 20, imagem: 'mwe-750.png', nome: 'Cooler Master MWE 750W', original: 'R$ 649,00',
      novo: 'R$ 519,20',
      descricao: 'Fonte de alimentação de 750W indicada para computadores que necessitam de maior capacidade de fornecimento de energia e diferentes componentes de alto desempenho.' },

    // COMPUTADORES - GABINETES
    { categoria: 'Computadores', tipo: 'Gabinetes', desconto: 18, imagem: 'corsair-3000d.png', nome: 'Corsair 3000D Airflow', original: 'R$ 599,00',
      novo: 'R$ 491,18',
      descricao: 'Gabinete projetado para facilitar a montagem e circulação de ar do computador, oferecendo espaço para organizar componentes e manter um visual moderno.' },
    { categoria: 'Computadores', tipo: 'Gabinetes', desconto: 15, imagem: 'q300l.png', nome: 'Cooler Master MasterBox Q300L', original: 'R$ 449,00',
      novo: 'R$ 381,65',
      descricao: 'Gabinete compacto e versátil para montagem de computadores, com estrutura pensada para facilitar a instalação dos componentes e a organização interna.' },

    // COMPUTADORES - REFRIGERAÇÃO
    { categoria: 'Computadores', tipo: 'Refrigeração', desconto: 20, imagem: 'deepcool-ak400.png', nome: 'DeepCool AK400', original: 'R$ 249,00',
      novo: 'R$ 199,20',
      descricao: 'Cooler para processadores desenvolvido para auxiliar no controle da temperatura durante o funcionamento do computador, sendo adequado para diferentes configurações.' },
    { categoria: 'Computadores', tipo: 'Refrigeração', desconto: 15, imagem: 'ml240l.png', nome: 'Cooler Master ML240L', original: 'R$ 599,00',
      novo: 'R$ 509,15',
      descricao: 'Sistema de refrigeração líquida desenvolvido para auxiliar no resfriamento do processador, combinando desempenho térmico com um visual moderno.' },

    // COMPUTADORES - PLACAS DE EXPANSÃO
    { categoria: 'Computadores', tipo: 'Placas de expansão', desconto: 20, imagem: 'tx3000e.png', nome: 'TP-Link Archer TX3000E Wi-Fi 6',
      original: 'R$ 399,00', novo: 'R$ 319,20',
      descricao: 'Placa de expansão que adiciona conectividade Wi-Fi de alta velocidade ao computador, sendo uma opção para melhorar a conexão em redes sem fio compatíveis.' },
    { categoria: 'Computadores', tipo: 'Placas de expansão', desconto: 15, imagem: 'audigy-fx.png', nome: 'Sound Blaster Audigy FX',
      original: 'R$ 349,00', novo: 'R$ 296,65',
      descricao: 'Placa de som desenvolvida para aprimorar a experiência de áudio do computador, sendo indicada para entretenimento, música e uso multimídia.' },

    // COMPUTADORES - MONITORES
    { categoria: 'Computadores', tipo: 'Monitores', desconto: 18, imagem: 'lg-ultragear-24.png', nome: 'LG UltraGear 24" 144Hz', original: 'R$ 1.099,00',
      novo: 'R$ 901,18',
      descricao: 'Monitor gamer com alta taxa de atualização, desenvolvido para proporcionar imagens mais fluidas em jogos e maior responsividade durante partidas.' },
    { categoria: 'Computadores', tipo: 'Monitores', desconto: 20, imagem: 'odyssey-g5-27.png', nome: 'Samsung Odyssey G5 27"', original: 'R$ 1.799,00',
      novo: 'R$ 1.439,20',
      descricao: 'Monitor desenvolvido para jogos e entretenimento, com tela ampla e recursos voltados para proporcionar uma experiência visual mais fluida e imersiva.' },

    // GAMES - PLAYSTATION
    { categoria: 'Games', tipo: 'PlayStation', desconto: 25, imagem: 'ps5.png', nome: 'PlayStation 5 Slim', original: 'R$ 3.999,00',
      novo: 'R$ 2.999,25',
      descricao: 'Console de nova geração desenvolvido para oferecer uma experiência de jogo imersiva, com gráficos de alta qualidade, carregamentos rápidos e uma ampla biblioteca de jogos.' },
    { categoria: 'Games', tipo: 'PlayStation', desconto: 15, imagem: 'playstation-portal.png', nome: 'PlayStation Portal', original: 'R$ 1.799,00',
      novo: 'R$ 1.529,15',
      descricao: 'Dispositivo portátil desenvolvido para permitir o acesso remoto aos jogos do PlayStation 5, oferecendo praticidade para jogar em diferentes ambientes da casa.' },

    // GAMES - NINTENDO
    { categoria: 'Games', tipo: 'Nintendo', desconto: 20, imagem: 'switch-oled.png', nome: 'Nintendo Switch OLED', original: 'R$ 2.499,00',
      novo: 'R$ 1.999,20',
      descricao: 'Console híbrido que pode ser utilizado tanto na televisão quanto no modo portátil, oferecendo uma experiência versátil para diferentes estilos de jogo.' },
    { categoria: 'Games', tipo: 'Nintendo', desconto: 15, imagem: 'switch-lite.png', nome: 'Nintendo Switch Lite', original: 'R$ 1.499,00',
      novo: 'R$ 1.274,15',
      descricao: 'Console portátil compacto desenvolvido para quem prefere jogar diretamente na tela do dispositivo, com acesso à biblioteca de jogos compatíveis do Nintendo Switch.' },

    // GAMES - XBOX
    { categoria: 'Games', tipo: 'Xbox', desconto: 20, imagem: 'xbox-series-x.png', nome: 'Xbox Series X', original: 'R$ 4.499,00', novo: 'R$ 3.599,20',
      descricao: 'Console de alto desempenho desenvolvido para proporcionar jogos com gráficos avançados, carregamentos rápidos e suporte a experiências de entretenimento em alta qualidade.' },
    { categoria: 'Games', tipo: 'Xbox', desconto: 18, imagem: 'xbox-series-s.png', nome: 'Xbox Series S', original: 'R$ 2.899,00', novo: 'R$ 2.377,18',
      descricao: 'Console compacto e totalmente digital, desenvolvido para oferecer uma experiência de nova geração em um formato menor e adequado para diferentes ambientes.' },

    // GAMES - JOGOS
    { categoria: 'Games', tipo: 'Jogos', desconto: 25, imagem: 'elden-ring.png', nome: 'Elden Ring (PlayStation 5)', original: 'R$ 299,00',
      novo: 'R$ 224,25',
      descricao: 'RPG de ação ambientado em um vasto mundo de fantasia, com exploração livre, combates desafiadores e grande variedade de personagens, inimigos e equipamentos.' },
    { categoria: 'Games', tipo: 'Jogos', desconto: 20, imagem: 'cyberpunk-ultimate.png', nome: 'Cyberpunk 2077 Ultimate Edition', original: 'R$ 349,00',
      novo: 'R$ 279,20',
      descricao: 'RPG de ação ambientado em uma cidade futurista, combinando exploração, combates e escolhas que influenciam a jornada do personagem.' },


    // TV E ÁUDIO - SMART TVS
    { categoria: 'TV e Áudio', tipo: 'Smart TVs', desconto: 20, imagem: 'samsung-crystal-50.png', nome: 'Samsung Crystal UHD 50"',
      original: 'R$ 2.799,00', novo: 'R$ 2.239,20',
      descricao: 'Smart TV com tela de 50 polegadas desenvolvida para oferecer imagens detalhadas e uma experiência completa de entretenimento, com acesso a aplicativos e conteúdos online.' },
    { categoria: 'TV e Áudio', tipo: 'Smart TVs', desconto: 15, imagem: 'lg-oled-c4-55.png', nome: 'LG OLED C4 55"', original: 'R$ 6.999,00',
      novo: 'R$ 5.949,15',
      descricao: 'Smart TV com tecnologia OLED que proporciona imagens com alto contraste e cores intensas, sendo uma opção para filmes, séries e jogos.' },

    // PROJETORES
    { categoria: 'TV e Áudio', tipo: 'Projetores', desconto: 18, imagem: 'epson-co-fh02.png', nome: 'Epson CO-FH02', original: 'R$ 3.499,00',
      novo: 'R$ 2.869,18',
      descricao: 'Projetor desenvolvido para reproduzir conteúdos em uma tela ampla, sendo adequado para apresentações, filmes, séries e outros tipos de entretenimento.' },
    { categoria: 'TV e Áudio', tipo: 'Projetores', desconto: 20, imagem: 'betec-bt960.png', nome: 'Betec BT960', original: 'R$ 1.299,00',
      novo: 'R$ 1.039,20',
      descricao: 'Projetor compacto voltado para entretenimento e apresentações, oferecendo uma alternativa prática para visualizar conteúdos em uma tela maior.' },

    // SOUNDBARS
    { categoria: 'TV e Áudio', tipo: 'Soundbars', desconto: 20, imagem: 'samsung-hw-b550.png', nome: 'Samsung HW-B550', original: 'R$ 1.299,00',
      novo: 'R$ 1.039,20',
      descricao: 'Soundbar desenvolvida para melhorar o áudio da televisão, proporcionando uma experiência sonora mais envolvente para filmes, séries, músicas e jogos.' },
    { categoria: 'TV e Áudio', tipo: 'Soundbars', desconto: 15, imagem: 'jbl-sb180.png', nome: 'JBL Cinema SB180', original: 'R$ 1.199,00',
      novo: 'R$ 1.019,15',
      descricao: 'Soundbar compacta voltada para aprimorar o som da TV, oferecendo uma experiência de áudio mais imersiva para conteúdos de entretenimento.' },

    // HOME THEATERS
    { categoria: 'TV e Áudio', tipo: 'Home Theaters', desconto: 18, imagem: 'lg-lhd687.png', nome: 'LG LHD687', original: 'R$ 2.199,00',
      novo: 'R$ 1.803,18',
      descricao: 'Sistema de home theater desenvolvido para proporcionar uma experiência de áudio mais envolvente em filmes, séries e outros conteúdos de entretenimento.' },
    { categoria: 'TV e Áudio', tipo: 'Home Theaters', desconto: 15, imagem: 'yamaha-yht1840.png', nome: 'Yamaha YHT-1840', original: 'R$ 4.499,00',
      novo: 'R$ 3.824,15',
      descricao: 'Sistema de áudio desenvolvido para criar uma experiência de cinema em casa, sendo indicado para filmes, séries, músicas e jogos.' },

    // CAIXAS DE SOM
    { categoria: 'TV e Áudio', tipo: 'Caixas de Som', desconto: 20, imagem: 'partybox-110.png', nome: 'JBL PartyBox 110', original: 'R$ 2.499,00',
      novo: 'R$ 1.999,20',
      descricao: 'Caixa de som portátil desenvolvida para festas e entretenimento, oferecendo uma experiência sonora potente e recursos para criar um ambiente mais envolvente.' },
    { categoria: 'TV e Áudio', tipo: 'Caixas de Som', desconto: 15, imagem: 'edifier-r1280db.png', nome: 'Edifier R1280DB', original: 'R$ 899,00',
      novo: 'R$ 764,15',
      descricao: 'Caixa de som projetada para oferecer áudio de qualidade em ambientes domésticos, sendo adequada para músicas, filmes, jogos e uso multimídia.' },

    // FONES
    { categoria: 'TV e Áudio', tipo: 'Fones de Ouvido', desconto: 18, imagem: 'sony-xm5.png', nome: 'Sony WH-1000XM5', original: 'R$ 2.499,00',
      novo: 'R$ 2.049,18',
      descricao: 'Fone de ouvido desenvolvido para proporcionar uma experiência sonora imersiva, combinando conforto e recursos voltados para diferentes ambientes de uso.' },
    { categoria: 'TV e Áudio', tipo: 'Fones de Ouvido', desconto: 20, imagem: 'jbl-770nc.png', nome: 'JBL Tune 770NC', original: 'R$ 599,00',
      novo: 'R$ 479,20',
      descricao: 'Fone de ouvido voltado para música e entretenimento, oferecendo praticidade para o uso diário e uma experiência sonora envolvente.' },

    // HEADSETS
    { categoria: 'TV e Áudio', tipo: 'Headsets', desconto: 15, imagem: 'hyperx-cloud-iii.png', nome: 'HyperX Cloud III', original: 'R$ 699,00',
      novo: 'R$ 594,15',
      descricao: 'Headset desenvolvido para jogos e comunicação, oferecendo conforto durante longas sessões e áudio adequado para uma experiência mais imersiva.' },
    { categoria: 'TV e Áudio', tipo: 'Headsets', desconto: 20, imagem: 'logitech-g435.png', nome: 'Logitech G435', original: 'R$ 499,00',
      novo: 'R$ 399,20',
      descricao: 'Headset gamer leve e versátil, indicado para jogos, chamadas e entretenimento, combinando praticidade com uma experiência de áudio imersiva.' },

    // MICROFONES
    { categoria: 'TV e Áudio', tipo: 'Microfones', desconto: 20, imagem: 'hyperx-solocast.png', nome: 'HyperX SoloCast', original: 'R$ 399,00',
      novo: 'R$ 319,20',
      descricao: 'Microfone compacto voltado para gravações, transmissões e comunicação online, oferecendo uma solução prática para criadores de conteúdo e jogadores.' },
    { categoria: 'TV e Áudio', tipo: 'Microfones', desconto: 15, imagem: 'fifine-k669b.png', nome: 'Fifine K669B', original: 'R$ 299,00',
      novo: 'R$ 254,15',
      descricao: 'Microfone indicado para gravações, chamadas e criação de conteúdo, oferecendo uma opção prática para uso doméstico e atividades online.' },

    // AMPLIFICADORES
    { categoria: 'TV e Áudio', tipo: 'Amplificadores', desconto: 18, imagem: 'frahm-slim-2000.png', nome: 'Frahm Slim 2000 App', original: 'R$ 899,00',
      novo: 'R$ 737,18',
      descricao: 'Amplificador desenvolvido para sistemas de áudio residenciais e ambientes de entretenimento, oferecendo praticidade para controlar e distribuir o som.' },
    { categoria: 'TV e Áudio', tipo: 'Amplificadores', desconto: 15, imagem: 'yamaha-as301.png', nome: 'Yamaha A-S301', original: 'R$ 2.999,00',
      novo: 'R$ 2.549,15',
      descricao: 'Amplificador integrado desenvolvido para sistemas de áudio domésticos, proporcionando uma reprodução sonora de qualidade para músicas e outros conteúdos.' },

    // RECEIVERS
    { categoria: 'TV e Áudio', tipo: 'Receivers', desconto: 20, imagem: 'denon-s760h.png', nome: 'Denon AVR-S760H', original: 'R$ 3.999,00',
      novo: 'R$ 3.199,20',
      descricao: 'Receiver desenvolvido para integrar diferentes equipamentos de áudio e vídeo, sendo uma opção para montar sistemas de entretenimento completos em casa.' },
    { categoria: 'TV e Áudio', tipo: 'Receivers', desconto: 18, imagem: 'yamaha-rxv4a.png', nome: 'Yamaha RX-V4A', original: 'R$ 3.499,00',
      novo: 'R$ 2.869,18',
      descricao: 'Receiver versátil para sistemas de áudio e vídeo, permitindo centralizar diferentes equipamentos e criar uma experiência de entretenimento mais completa.' },

    // SUBWOOFERS
    { categoria: 'TV e Áudio', tipo: 'Subwoofers', desconto: 20, imagem: 'jbl-a100p.png', nome: 'JBL Stage A100P', original: 'R$ 2.299,00',
      novo: 'R$ 1.839,20',
      descricao: 'Subwoofer desenvolvido para reforçar as frequências graves do sistema de áudio, proporcionando maior impacto e profundidade em músicas, filmes e jogos.' },
    { categoria: 'TV e Áudio', tipo: 'Subwoofers', desconto: 15, imagem: 'yamaha-nssw100.png', nome: 'Yamaha NS-SW100', original: 'R$ 1.799,00',
      novo: 'R$ 1.529,15',
      descricao: 'Subwoofer projetado para complementar sistemas de áudio domésticos, adicionando graves mais presentes e uma experiência sonora mais envolvente.' },

    // CASA - ASSISTENTES VIRTUAIS
    { categoria: 'Casa', tipo: 'Assistentes Virtuais', desconto: 20, imagem: 'echo-dot-5.png', nome: 'Echo Dot 5ª geração', original: 'R$ 499,00',
      novo: 'R$ 399,20',
      descricao: 'Assistente virtual compacto que permite controlar dispositivos inteligentes, reproduzir músicas, consultar informações e realizar diversas tarefas por comandos de voz.' },
    { categoria: 'Casa', tipo: 'Assistentes Virtuais', desconto: 15, imagem: 'echo-show-5.png', nome: 'Echo Show 5', original: 'R$ 699,00',
      novo: 'R$ 594,15',
      descricao: 'Assistente virtual com tela integrada, indicado para chamadas, reprodução de conteúdos, consultas e controle de dispositivos inteligentes por comandos de voz.' },

    // LÂMPADAS
    { categoria: 'Casa', tipo: 'Lâmpadas Inteligentes', desconto: 20, imagem: 'positivo-lampada-rgb.png', nome: 'Positivo Casa Inteligente RGB+',
      original: 'R$ 99,00', novo: 'R$ 79,20',
      descricao: 'Lâmpada inteligente que permite personalizar a iluminação do ambiente, oferecendo diferentes cores e opções de controle para deixar a casa mais prática e confortável.' },
    { categoria: 'Casa', tipo: 'Lâmpadas Inteligentes', desconto: 15, imagem: 'philips-hue.png', nome: 'Philips Hue White and Color',
      original: 'R$ 349,00', novo: 'R$ 296,65',
      descricao: 'Lâmpada inteligente que oferece diferentes opções de iluminação e cores, permitindo criar ambientes personalizados de acordo com diferentes momentos e necessidades.' },

    // SEGURANÇA
    { categoria: 'Casa', tipo: 'Segurança', desconto: 20, imagem: 'intelbras-im5.png', nome: 'Intelbras iM5 SC', original: 'R$ 399,00',
      novo: 'R$ 319,20',
      descricao: 'Câmera de segurança desenvolvida para monitoramento residencial, permitindo acompanhar diferentes ambientes e aumentar a praticidade no controle da casa.' },
    { categoria: 'Casa', tipo: 'Segurança', desconto: 15, imagem: 'tapo-c200.png', nome: 'TP-Link Tapo C200', original: 'R$ 249,00', novo: 'R$ 211,65',
      descricao: 'Câmera inteligente para monitoramento de ambientes, oferecendo uma solução prática para acompanhar a segurança da residência.' },

    // ROBÔS ASPIRADORES
    { categoria: 'Casa', tipo: 'Robôs Aspiradores', desconto: 18, imagem: 'xiaomi-s10.png', nome: 'Xiaomi Robot Vacuum S10', original: 'R$ 2.299,00',
      novo: 'R$ 1.885,18',
      descricao: 'Robô aspirador desenvolvido para automatizar a limpeza da casa, ajudando a remover sujeiras e poeira de diferentes tipos de piso.' },
    { categoria: 'Casa', tipo: 'Robôs Aspiradores', desconto: 20, imagem: 'wap-w400.png', nome: 'WAP Robot W400', original: 'R$ 1.499,00',
      novo: 'R$ 1.199,20',
      descricao: 'Robô aspirador criado para facilitar a rotina de limpeza, realizando a remoção automática de sujeira e poeira dos ambientes.' },

    // CLIMATIZAÇÃO
    { categoria: 'Casa', tipo: 'Climatização', desconto: 15, imagem: 'samsung-windfree.png', nome: 'Samsung WindFree 12.000 BTU',
      original: 'R$ 2.999,00', novo: 'R$ 2.549,15',
      descricao: 'Ar-condicionado desenvolvido para climatizar ambientes de forma confortável, sendo indicado para manter uma temperatura agradável em diferentes momentos do dia.' },
    { categoria: 'Casa', tipo: 'Climatização', desconto: 18, imagem: 'lg-dual-inverter.png', nome: 'LG Dual Inverter 12.000 BTU',
      original: 'R$ 3.199,00', novo: 'R$ 2.623,18',
      descricao: 'Ar-condicionado desenvolvido para proporcionar climatização eficiente e conforto térmico, sendo adequado para ambientes residenciais.' },

    // ASPIRADORES
    { categoria: 'Casa', tipo: 'Aspiradores', desconto: 20, imagem: 'wap-power-speed.png', nome: 'WAP Power Speed', original: 'R$ 699,00',
      novo: 'R$ 559,20',
      descricao: 'Aspirador desenvolvido para facilitar a limpeza de diferentes ambientes, ajudando na remoção de poeira, sujeira e outros resíduos do dia a dia.' },
    { categoria: 'Casa', tipo: 'Aspiradores', desconto: 15, imagem: 'electrolux-erg26.png', nome: 'Electrolux ERG26', original: 'R$ 899,00',
      novo: 'R$ 764,15',
      descricao: 'Aspirador versátil pensado para tornar a limpeza doméstica mais prática, auxiliando na remoção de sujeiras de diferentes superfícies.' },

    // TOMADAS E ENERGIA
    { categoria: 'Casa', tipo: 'Tomadas e Energia', desconto: 20, imagem: 'intelbras-ews211.png', nome: 'Intelbras EWS 211', original: 'R$ 129,00',
      novo: 'R$ 103,20',
      descricao: 'Dispositivo inteligente desenvolvido para facilitar o controle de equipamentos elétricos, proporcionando mais praticidade para a rotina doméstica.' },
    { categoria: 'Casa', tipo: 'Tomadas e Energia', desconto: 15, imagem: 'positivo-smart-plug.png', nome: 'Positivo Smart Plug Wi-Fi',
      original: 'R$ 119,00', novo: 'R$ 101,15',
      descricao: 'Tomada inteligente que permite controlar aparelhos conectados de forma prática, ajudando a integrar equipamentos convencionais a uma casa inteligente.' },

    // ACESSÓRIOS - CABOS
    { categoria: 'Acessórios', tipo: 'Cabos', desconto: 20, imagem: 'ugreen-hdmi-21.png', nome: 'Ugreen HDMI 2.1 2m', original: 'R$ 149,00',
      novo: 'R$ 119,20',
      descricao: 'Cabo HDMI desenvolvido para conectar dispositivos de áudio e vídeo, sendo adequado para televisores, monitores, consoles e outros equipamentos compatíveis.' },
    { categoria: 'Acessórios', tipo: 'Cabos', desconto: 15, imagem: 'baseus-usbc-100w.png', nome: 'Baseus USB-C 100W 2m', original: 'R$ 99,00',
      novo: 'R$ 84,15',
      descricao: 'Cabo USB-C de uso versátil, indicado para carregamento e conexão de dispositivos compatíveis, oferecendo praticidade para diferentes situações do dia a dia.' },

    // CARREGADORES
    { categoria: 'Acessórios', tipo: 'Carregadores', desconto: 20, imagem: 'samsung-25w.png', nome: 'Samsung Carregador 25W USB-C',
      original: 'R$ 149,00', novo: 'R$ 119,20',
      descricao: 'Carregador USB-C desenvolvido para fornecer energia a dispositivos compatíveis, oferecendo uma solução compacta e prática para o uso diário.' },
    { categoria: 'Acessórios', tipo: 'Carregadores', desconto: 15, imagem: 'ugreen-nexode-65w.png', nome: 'Ugreen Nexode 65W', original: 'R$ 349,00',
      novo: 'R$ 296,65',
      descricao: 'Carregador compacto de alta potência, indicado para carregar smartphones, tablets, notebooks e outros dispositivos compatíveis.' },

    // ADAPTADORES
    { categoria: 'Acessórios', tipo: 'Adaptadores', desconto: 20, imagem: 'ugreen-usbc-hdmi.png', nome: 'Ugreen USB-C para HDMI', original: 'R$ 199,00',
      novo: 'R$ 159,20',
      descricao: 'Adaptador que permite conectar dispositivos com saída USB-C a telas e equipamentos compatíveis com HDMI, facilitando a transmissão de imagem e áudio.' },
    { categoria: 'Acessórios', tipo: 'Adaptadores', desconto: 15, imagem: 'tplink-ue300.png', nome: 'TP-Link UE300 USB 3.0 Gigabit',
      original: 'R$ 149,00', novo: 'R$ 126,65',
      descricao: 'Adaptador de rede compacto que adiciona conectividade Ethernet a dispositivos compatíveis, sendo uma alternativa prática para conexões cabeadas.' },

    // HUBS USB
    { categoria: 'Acessórios', tipo: 'Hubs USB', desconto: 20, imagem: 'ugreen-hub-6em1.png', nome: 'Ugreen Hub USB-C 6 em 1', original: 'R$ 299,00',
      novo: 'R$ 239,20',
      descricao: 'Hub USB-C que expande as opções de conexão do computador, permitindo utilizar diferentes periféricos e acessórios através de uma única porta compatível.' },
    { categoria: 'Acessórios', tipo: 'Hubs USB', desconto: 15, imagem: 'baseus-hub-7em1.png', nome: 'Baseus Hub USB-C 7 em 1', original: 'R$ 349,00',
      novo: 'R$ 296,65',
      descricao: 'Hub compacto desenvolvido para ampliar a conectividade de dispositivos com USB-C, oferecendo praticidade para conectar diferentes acessórios e periféricos.' },

    // SUPORTES
    { categoria: 'Acessórios', tipo: 'Suportes', desconto: 20, imagem: 'elg-f80n.png', nome: 'ELG F80N Suporte para Monitor', original: 'R$ 299,00',
      novo: 'R$ 239,20',
      descricao: 'Suporte para monitor desenvolvido para organizar melhor o espaço de trabalho, permitindo posicionar a tela de maneira mais prática e confortável.' },
    { categoria: 'Acessórios', tipo: 'Suportes', desconto: 15, imagem: 'octoo-notebook.png', nome: 'Octoo Suporte para Notebook', original: 'R$ 149,00',
      novo: 'R$ 126,65',
      descricao: 'Suporte para notebook desenvolvido para elevar o computador e proporcionar uma posição mais adequada para uso em mesas e ambientes de trabalho ou estudo.' },

    // CAPAS E PELÍCULAS
    { categoria: 'Acessórios', tipo: 'Capas e Películas', desconto: 20, imagem: 'spigen-s24.png', nome: 'Spigen Liquid Air Galaxy S24',
      original: 'R$ 149,00', novo: 'R$ 119,20',
      descricao: 'Capa desenvolvida para o Galaxy S24, oferecendo proteção para o aparelho contra pequenos impactos e arranhões sem comprometer a praticidade de uso.' },
    { categoria: 'Acessórios', tipo: 'Capas e Películas', desconto: 15, imagem: 'esr-iphone16.png', nome: 'ESR Película iPhone 16',
      original: 'R$ 99,00', novo: 'R$ 84,15',
      descricao: 'Película desenvolvida para proteger a tela do iPhone 16 contra riscos e pequenos danos, mantendo a praticidade e a visualização do display.' },

    // POWER BANKS
    { categoria: 'Acessórios', tipo: 'Power Banks', desconto: 20, imagem: 'baseus-20000.png', nome: 'Baseus 20.000mAh 20W', original: 'R$ 249,00',
      novo: 'R$ 199,20',
      descricao: 'Power bank de alta capacidade desenvolvido para recarregar smartphones, tablets e outros dispositivos compatíveis longe de tomadas, sendo uma opção prática para viagens e uso diário.' },
    { categoria: 'Acessórios', tipo: 'Power Banks', desconto: 15, imagem: 'anker-powercore.png', nome: 'Anker PowerCore 10.000mAh',
      original: 'R$ 299,00', novo: 'R$ 254,15',
      descricao: 'Bateria portátil compacta desenvolvida para fornecer energia adicional a dispositivos compatíveis, facilitando o carregamento durante deslocamentos e atividades fora de casa.' },

    // ARMAZENAMENTO PORTÁTIL
    { categoria: 'Acessórios', tipo: 'Armazenamento Portátil', desconto: 20, imagem: 'sandisk-extreme-1tb.png', nome: 'SanDisk Extreme SSD 1TB',
      original: 'R$ 799,00', novo: 'R$ 639,20',
      descricao: 'SSD portátil de 1 TB desenvolvido para armazenar e transportar arquivos, fotos, vídeos e outros conteúdos, oferecendo praticidade para uso em diferentes dispositivos compatíveis.' },
    { categoria: 'Acessórios', tipo: 'Armazenamento Portátil', desconto: 15, imagem: 'kingston-exodia-128.png',
      nome: 'Kingston DataTraveler Exodia 128GB', original: 'R$ 89,00', novo: 'R$ 75,65',
      descricao: 'Pen drive de 128 GB desenvolvido para armazenar e transportar arquivos de forma prática, sendo adequado para documentos, fotos, vídeos e outros dados.' },

    // LEITORES DE CARTÃO
    { categoria: 'Acessórios', tipo: 'Leitores de Cartão', desconto: 20, imagem: 'ugreen-leitor-sd.png', nome: 'Ugreen Leitor USB 3.0 SD/TF',
      original: 'R$ 129,00', novo: 'R$ 103,20',
      descricao: 'Leitor de cartões compacto que permite acessar dados armazenados em cartões SD e TF através de uma conexão USB, sendo útil para computadores e outros dispositivos compatíveis.' },
    { categoria: 'Acessórios', tipo: 'Leitores de Cartão', desconto: 15, imagem: 'kingston-mobilelite.png', nome: 'Kingston MobileLite Plus',
      original: 'R$ 149,00', novo: 'R$ 126,65',
      descricao: 'Leitor de cartões portátil desenvolvido para facilitar a transferência e o acesso a arquivos armazenados em cartões de memória compatíveis.' },

    // DOCK STATIONS
    { categoria: 'Acessórios', tipo: 'Dock Stations', desconto: 18, imagem: 'dell-wd19s.png', nome: 'Dell WD19S', original: 'R$ 1.499,00',
      novo: 'R$ 1.229,18',
      descricao: 'Dock station desenvolvida para expandir as conexões de notebooks e computadores compatíveis, permitindo conectar periféricos, monitores e outros dispositivos através de uma única estação.' },
    { categoria: 'Acessórios', tipo: 'Dock Stations', desconto: 20, imagem: 'ugreen-revodok.png', nome: 'Ugreen Revodok Pro 13 em 1',
      original: 'R$ 899,00', novo: 'R$ 719,20',
      descricao: 'Dock station com múltiplas opções de conexão, desenvolvida para ampliar a conectividade de notebooks e outros dispositivos compatíveis, facilitando o uso de periféricos e acessórios.' }
]

export const OFERTAS: Oferta[] = ofertasSemId.map
(
    (produto, index) =>
    ({
        id: index + 1, ...produto
    })
)

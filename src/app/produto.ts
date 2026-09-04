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
    { categoria: 'Móveis', tipo: 'Celulares', desconto: 20, imagem: 'samsung24.png', nome: 'Samsung Galaxy S24', original: 'R$ 2.243,15', novo: 'R$ 1.794,52' },
    { categoria: 'Móveis', tipo: 'Celulares', desconto: 15, imagem: 'ip16.png', nome: 'iPhone 16', original: 'R$ 4.599,00', novo: 'R$ 3.909,15' },

    // MÓVEIS - TABLETS
    { categoria: 'Móveis', tipo: 'Tablets', desconto: 18, imagem: 'tab-s9-fe.png', nome: 'Samsung Galaxy Tab S9 FE', original: 'R$ 2.799,00', novo: 'R$ 2.295,18' },
    { categoria: 'Móveis', tipo: 'Tablets', desconto: 12, imagem: 'ipad10.png', nome: 'iPad 10ª geração', original: 'R$ 3.499,00', novo: 'R$ 3.079,12' },

    // MÓVEIS - NOTEBOOKS
    { categoria: 'Móveis', tipo: 'Notebooks', desconto: 20, imagem: 'ideapad-3.png', nome: 'Lenovo IdeaPad 3', original: 'R$ 3.299,00', novo: 'R$ 2.639,20' },
    { categoria: 'Móveis', tipo: 'Notebooks', desconto: 15, imagem: 'aspire-5.png', nome: 'Acer Aspire 5', original: 'R$ 3.899,00', novo: 'R$ 3.314,15' },

    // MÓVEIS - SMARTWATCHES
    { categoria: 'Móveis', tipo: 'Smartwatches', desconto: 25, imagem: 'galaxy-watch-6.png', nome: 'Samsung Galaxy Watch 6', original: 'R$ 1.799,00', novo: 'R$ 1.349,25' },
    { categoria: 'Móveis', tipo: 'Smartwatches', desconto: 10, imagem: 'apple-watch-se.png', nome: 'Apple Watch SE', original: 'R$ 2.499,00', novo: 'R$ 2.249,10' },

    // COMPUTADORES - PROCESSADORES
    { categoria: 'Computadores', tipo: 'Processadores', desconto: 15, imagem: 'ryzen-5-7600.png', nome: 'AMD Ryzen 5 7600', original: 'R$ 1.399,00', novo: 'R$ 1.189,15' },
    { categoria: 'Computadores', tipo: 'Processadores', desconto: 18, imagem: 'i5-14400f.png', nome: 'Intel Core i5-14400F', original: 'R$ 1.699,00', novo: 'R$ 1.393,18' },

    // COMPUTADORES - PLACAS-MÃE
    { categoria: 'Computadores', tipo: 'Placas-mãe', desconto: 12, imagem: 'asus-b650m.png', nome: 'ASUS TUF Gaming B650M-Plus', original: 'R$ 1.599,00', novo: 'R$ 1.407,12' },
    { categoria: 'Computadores', tipo: 'Placas-mãe', desconto: 15, imagem: 'gigabyte-b760m.png', nome: 'Gigabyte B760M DS3H', original: 'R$ 1.099,00', novo: 'R$ 934,15' },

    // COMPUTADORES - RAM
    { categoria: 'Computadores', tipo: 'Memórias RAM', desconto: 20, imagem: 'kingston-fury-16gb.png', nome: 'Kingston Fury Beast 16GB DDR5', original: 'R$ 499,00', novo: 'R$ 399,20' },
    { categoria: 'Computadores', tipo: 'Memórias RAM', desconto: 15, imagem: 'corsair-vengeance-32gb.png', nome: 'Corsair Vengeance 32GB DDR5', original: 'R$ 899,00', novo: 'R$ 764,15' },

    // COMPUTADORES - GPU
    { categoria: 'Computadores', tipo: 'Placas de vídeo', desconto: 12, imagem: 'rtx-4060.png', nome: 'GeForce RTX 4060 8GB', original: 'R$ 2.399,00', novo: 'R$ 2.111,12' },
    { categoria: 'Computadores', tipo: 'Placas de vídeo', desconto: 18, imagem: 'rx-7600.png', nome: 'Radeon RX 7600 8GB', original: 'R$ 2.199,00', novo: 'R$ 1.803,18' },

    // COMPUTADORES - SSD E HD
    { categoria: 'Computadores', tipo: 'SSD e HD', desconto: 20, imagem: 'kingston-nv2-1tb.png', nome: 'Kingston NV2 SSD 1TB', original: 'R$ 499,00', novo: 'R$ 399,20' },
    { categoria: 'Computadores', tipo: 'SSD e HD', desconto: 15, imagem: 'seagate-2tb.png', nome: 'Seagate Barracuda HD 2TB', original: 'R$ 449,00', novo: 'R$ 381,65' },

    // COMPUTADORES - FONTES
    { categoria: 'Computadores', tipo: 'Fontes', desconto: 15, imagem: 'corsair-cx650.png', nome: 'Corsair CX650 650W', original: 'R$ 499,00', novo: 'R$ 424,15' },
    { categoria: 'Computadores', tipo: 'Fontes', desconto: 20, imagem: 'mwe-750.png', nome: 'Cooler Master MWE 750W', original: 'R$ 649,00', novo: 'R$ 519,20' },

    // COMPUTADORES - GABINETES
    { categoria: 'Computadores', tipo: 'Gabinetes', desconto: 18, imagem: 'corsair-3000d.png', nome: 'Corsair 3000D Airflow', original: 'R$ 599,00', novo: 'R$ 491,18' },
    { categoria: 'Computadores', tipo: 'Gabinetes', desconto: 15, imagem: 'q300l.png', nome: 'Cooler Master MasterBox Q300L', original: 'R$ 449,00', novo: 'R$ 381,65' },

    // COMPUTADORES - REFRIGERAÇÃO
    { categoria: 'Computadores', tipo: 'Refrigeração', desconto: 20, imagem: 'deepcool-ak400.png', nome: 'DeepCool AK400', original: 'R$ 249,00', novo: 'R$ 199,20' },
    { categoria: 'Computadores', tipo: 'Refrigeração', desconto: 15, imagem: 'ml240l.png', nome: 'Cooler Master ML240L', original: 'R$ 599,00', novo: 'R$ 509,15' },

    // COMPUTADORES - PLACAS DE EXPANSÃO
    { categoria: 'Computadores', tipo: 'Placas de expansão', desconto: 20, imagem: 'tx3000e.png', nome: 'TP-Link Archer TX3000E Wi-Fi 6', original: 'R$ 399,00', novo: 'R$ 319,20' },
    { categoria: 'Computadores', tipo: 'Placas de expansão', desconto: 15, imagem: 'audigy-fx.png', nome: 'Sound Blaster Audigy FX', original: 'R$ 349,00', novo: 'R$ 296,65' },

    // COMPUTADORES - MONITORES
    { categoria: 'Computadores', tipo: 'Monitores', desconto: 18, imagem: 'lg-ultragear-24.png', nome: 'LG UltraGear 24" 144Hz', original: 'R$ 1.099,00', novo: 'R$ 901,18' },
    { categoria: 'Computadores', tipo: 'Monitores', desconto: 20, imagem: 'odyssey-g5-27.png', nome: 'Samsung Odyssey G5 27"', original: 'R$ 1.799,00', novo: 'R$ 1.439,20' },


    // GAMES - PLAYSTATION
    { categoria: 'Games', tipo: 'PlayStation', desconto: 25, imagem: 'ps5.png', nome: 'PlayStation 5 Slim', original: 'R$ 3.999,00', novo: 'R$ 2.999,25' },
    { categoria: 'Games', tipo: 'PlayStation', desconto: 15, imagem: 'playstation-portal.png', nome: 'PlayStation Portal', original: 'R$ 1.799,00', novo: 'R$ 1.529,15' },

    // GAMES - NINTENDO
    { categoria: 'Games', tipo: 'Nintendo', desconto: 20, imagem: 'switch-oled.png', nome: 'Nintendo Switch OLED', original: 'R$ 2.499,00', novo: 'R$ 1.999,20' },
    { categoria: 'Games', tipo: 'Nintendo', desconto: 15, imagem: 'switch-lite.png', nome: 'Nintendo Switch Lite', original: 'R$ 1.499,00', novo: 'R$ 1.274,15' },

    // GAMES - XBOX
    { categoria: 'Games', tipo: 'Xbox', desconto: 20, imagem: 'xbox-series-x.png', nome: 'Xbox Series X', original: 'R$ 4.499,00', novo: 'R$ 3.599,20' },
    { categoria: 'Games', tipo: 'Xbox', desconto: 18, imagem: 'xbox-series-s.png', nome: 'Xbox Series S', original: 'R$ 2.899,00', novo: 'R$ 2.377,18' },

    // GAMES - JOGOS
    { categoria: 'Games', tipo: 'Jogos', desconto: 25, imagem: 'elden-ring.png', nome: 'Elden Ring (PlayStation 5)', original: 'R$ 299,00', novo: 'R$ 224,25' },
    { categoria: 'Games', tipo: 'Jogos', desconto: 20, imagem: 'cyberpunk-ultimate.png', nome: 'Cyberpunk 2077 Ultimate Edition', original: 'R$ 349,00', novo: 'R$ 279,20' },


    // TV E ÁUDIO - SMART TVS
    { categoria: 'TV e Áudio', tipo: 'Smart TVs', desconto: 20, imagem: 'samsung-crystal-50.png', nome: 'Samsung Crystal UHD 50"', original: 'R$ 2.799,00', novo: 'R$ 2.239,20' },
    { categoria: 'TV e Áudio', tipo: 'Smart TVs', desconto: 15, imagem: 'lg-oled-c4-55.png', nome: 'LG OLED C4 55"', original: 'R$ 6.999,00', novo: 'R$ 5.949,15' },

    // PROJETORES
    { categoria: 'TV e Áudio', tipo: 'Projetores', desconto: 18, imagem: 'epson-co-fh02.png', nome: 'Epson CO-FH02', original: 'R$ 3.499,00', novo: 'R$ 2.869,18' },
    { categoria: 'TV e Áudio', tipo: 'Projetores', desconto: 20, imagem: 'betec-bt960.png', nome: 'Betec BT960', original: 'R$ 1.299,00', novo: 'R$ 1.039,20' },

    // SOUNDBARS
    { categoria: 'TV e Áudio', tipo: 'Soundbars', desconto: 20, imagem: 'samsung-hw-b550.png', nome: 'Samsung HW-B550', original: 'R$ 1.299,00', novo: 'R$ 1.039,20' },
    { categoria: 'TV e Áudio', tipo: 'Soundbars', desconto: 15, imagem: 'jbl-sb180.png', nome: 'JBL Cinema SB180', original: 'R$ 1.199,00', novo: 'R$ 1.019,15' },

    // HOME THEATERS
    { categoria: 'TV e Áudio', tipo: 'Home Theaters', desconto: 18, imagem: 'lg-lhd687.png', nome: 'LG LHD687', original: 'R$ 2.199,00', novo: 'R$ 1.803,18' },
    { categoria: 'TV e Áudio', tipo: 'Home Theaters', desconto: 15, imagem: 'yamaha-yht1840.png', nome: 'Yamaha YHT-1840', original: 'R$ 4.499,00', novo: 'R$ 3.824,15' },

    // CAIXAS DE SOM
    { categoria: 'TV e Áudio', tipo: 'Caixas de Som', desconto: 20, imagem: 'partybox-110.png', nome: 'JBL PartyBox 110', original: 'R$ 2.499,00', novo: 'R$ 1.999,20' },
    { categoria: 'TV e Áudio', tipo: 'Caixas de Som', desconto: 15, imagem: 'edifier-r1280db.png', nome: 'Edifier R1280DB', original: 'R$ 899,00', novo: 'R$ 764,15' },

    // FONES
    { categoria: 'TV e Áudio', tipo: 'Fones de Ouvido', desconto: 18, imagem: 'sony-xm5.png', nome: 'Sony WH-1000XM5', original: 'R$ 2.499,00', novo: 'R$ 2.049,18' },
    { categoria: 'TV e Áudio', tipo: 'Fones de Ouvido', desconto: 20, imagem: 'jbl-770nc.png', nome: 'JBL Tune 770NC', original: 'R$ 599,00', novo: 'R$ 479,20' },

    // HEADSETS
    { categoria: 'TV e Áudio', tipo: 'Headsets', desconto: 15, imagem: 'hyperx-cloud-iii.png', nome: 'HyperX Cloud III', original: 'R$ 699,00', novo: 'R$ 594,15' },
    { categoria: 'TV e Áudio', tipo: 'Headsets', desconto: 20, imagem: 'logitech-g435.png', nome: 'Logitech G435', original: 'R$ 499,00', novo: 'R$ 399,20' },

    // MICROFONES
    { categoria: 'TV e Áudio', tipo: 'Microfones', desconto: 20, imagem: 'hyperx-solocast.png', nome: 'HyperX SoloCast', original: 'R$ 399,00', novo: 'R$ 319,20' },
    { categoria: 'TV e Áudio', tipo: 'Microfones', desconto: 15, imagem: 'fifine-k669b.png', nome: 'Fifine K669B', original: 'R$ 299,00', novo: 'R$ 254,15' },

    // AMPLIFICADORES
    { categoria: 'TV e Áudio', tipo: 'Amplificadores', desconto: 18, imagem: 'frahm-slim-2000.png', nome: 'Frahm Slim 2000 App', original: 'R$ 899,00', novo: 'R$ 737,18' },
    { categoria: 'TV e Áudio', tipo: 'Amplificadores', desconto: 15, imagem: 'yamaha-as301.png', nome: 'Yamaha A-S301', original: 'R$ 2.999,00', novo: 'R$ 2.549,15' },

    // RECEIVERS
    { categoria: 'TV e Áudio', tipo: 'Receivers', desconto: 20, imagem: 'denon-s760h.png', nome: 'Denon AVR-S760H', original: 'R$ 3.999,00', novo: 'R$ 3.199,20' },
    { categoria: 'TV e Áudio', tipo: 'Receivers', desconto: 18, imagem: 'yamaha-rxv4a.png', nome: 'Yamaha RX-V4A', original: 'R$ 3.499,00', novo: 'R$ 2.869,18' },

    // SUBWOOFERS
    { categoria: 'TV e Áudio', tipo: 'Subwoofers', desconto: 20, imagem: 'jbl-a100p.png', nome: 'JBL Stage A100P', original: 'R$ 2.299,00', novo: 'R$ 1.839,20' },
    { categoria: 'TV e Áudio', tipo: 'Subwoofers', desconto: 15, imagem: 'yamaha-nssw100.png', nome: 'Yamaha NS-SW100', original: 'R$ 1.799,00', novo: 'R$ 1.529,15' },


    // CASA - ASSISTENTES VIRTUAIS
    { categoria: 'Casa', tipo: 'Assistentes Virtuais', desconto: 20, imagem: 'echo-dot-5.png', nome: 'Echo Dot 5ª geração', original: 'R$ 499,00', novo: 'R$ 399,20' },
    { categoria: 'Casa', tipo: 'Assistentes Virtuais', desconto: 15, imagem: 'echo-show-5.png', nome: 'Echo Show 5', original: 'R$ 699,00', novo: 'R$ 594,15' },

    // LÂMPADAS
    { categoria: 'Casa', tipo: 'Lâmpadas Inteligentes', desconto: 20, imagem: 'positivo-lampada-rgb.png', nome: 'Positivo Casa Inteligente RGB+', original: 'R$ 99,00', novo: 'R$ 79,20' },
    { categoria: 'Casa', tipo: 'Lâmpadas Inteligentes', desconto: 15, imagem: 'philips-hue.png', nome: 'Philips Hue White and Color', original: 'R$ 349,00', novo: 'R$ 296,65' },

    // SEGURANÇA
    { categoria: 'Casa', tipo: 'Segurança', desconto: 20, imagem: 'intelbras-im5.png', nome: 'Intelbras iM5 SC', original: 'R$ 399,00', novo: 'R$ 319,20' },
    { categoria: 'Casa', tipo: 'Segurança', desconto: 15, imagem: 'tapo-c200.png', nome: 'TP-Link Tapo C200', original: 'R$ 249,00', novo: 'R$ 211,65' },

    // ROBÔS ASPIRADORES
    { categoria: 'Casa', tipo: 'Robôs Aspiradores', desconto: 18, imagem: 'xiaomi-s10.png', nome: 'Xiaomi Robot Vacuum S10', original: 'R$ 2.299,00', novo: 'R$ 1.885,18' },
    { categoria: 'Casa', tipo: 'Robôs Aspiradores', desconto: 20, imagem: 'wap-w400.png', nome: 'WAP Robot W400', original: 'R$ 1.499,00', novo: 'R$ 1.199,20' },

    // CLIMATIZAÇÃO
    { categoria: 'Casa', tipo: 'Climatização', desconto: 15, imagem: 'samsung-windfree.png', nome: 'Samsung WindFree 12.000 BTU', original: 'R$ 2.999,00', novo: 'R$ 2.549,15' },
    { categoria: 'Casa', tipo: 'Climatização', desconto: 18, imagem: 'lg-dual-inverter.png', nome: 'LG Dual Inverter 12.000 BTU', original: 'R$ 3.199,00', novo: 'R$ 2.623,18' },

    // ASPIRADORES
    { categoria: 'Casa', tipo: 'Aspiradores', desconto: 20, imagem: 'wap-power-speed.png', nome: 'WAP Power Speed', original: 'R$ 699,00', novo: 'R$ 559,20' },
    { categoria: 'Casa', tipo: 'Aspiradores', desconto: 15, imagem: 'electrolux-erg26.png', nome: 'Electrolux ERG26', original: 'R$ 899,00', novo: 'R$ 764,15' },

    // TOMADAS E ENERGIA
    { categoria: 'Casa', tipo: 'Tomadas e Energia', desconto: 20, imagem: 'intelbras-ews211.png', nome: 'Intelbras EWS 211', original: 'R$ 129,00', novo: 'R$ 103,20' },
    { categoria: 'Casa', tipo: 'Tomadas e Energia', desconto: 15, imagem: 'positivo-smart-plug.png', nome: 'Positivo Smart Plug Wi-Fi', original: 'R$ 119,00', novo: 'R$ 101,15' },


    // ACESSÓRIOS - CABOS
    { categoria: 'Acessórios', tipo: 'Cabos', desconto: 20, imagem: 'ugreen-hdmi-21.png', nome: 'Ugreen HDMI 2.1 2m', original: 'R$ 149,00', novo: 'R$ 119,20' },
    { categoria: 'Acessórios', tipo: 'Cabos', desconto: 15, imagem: 'baseus-usbc-100w.png', nome: 'Baseus USB-C 100W 2m', original: 'R$ 99,00', novo: 'R$ 84,15' },

    // CARREGADORES
    { categoria: 'Acessórios', tipo: 'Carregadores', desconto: 20, imagem: 'samsung-25w.png', nome: 'Samsung Carregador 25W USB-C', original: 'R$ 149,00', novo: 'R$ 119,20' },
    { categoria: 'Acessórios', tipo: 'Carregadores', desconto: 15, imagem: 'ugreen-nexode-65w.png', nome: 'Ugreen Nexode 65W', original: 'R$ 349,00', novo: 'R$ 296,65' },

    // ADAPTADORES
    { categoria: 'Acessórios', tipo: 'Adaptadores', desconto: 20, imagem: 'ugreen-usbc-hdmi.png', nome: 'Ugreen USB-C para HDMI', original: 'R$ 199,00', novo: 'R$ 159,20' },
    { categoria: 'Acessórios', tipo: 'Adaptadores', desconto: 15, imagem: 'tplink-ue300.png', nome: 'TP-Link UE300 USB 3.0 Gigabit', original: 'R$ 149,00', novo: 'R$ 126,65' },

    // HUBS USB
    { categoria: 'Acessórios', tipo: 'Hubs USB', desconto: 20, imagem: 'ugreen-hub-6em1.png', nome: 'Ugreen Hub USB-C 6 em 1', original: 'R$ 299,00', novo: 'R$ 239,20' },
    { categoria: 'Acessórios', tipo: 'Hubs USB', desconto: 15, imagem: 'baseus-hub-7em1.png', nome: 'Baseus Hub USB-C 7 em 1', original: 'R$ 349,00', novo: 'R$ 296,65' },

    // SUPORTES
    { categoria: 'Acessórios', tipo: 'Suportes', desconto: 20, imagem: 'elg-f80n.png', nome: 'ELG F80N Suporte para Monitor', original: 'R$ 299,00', novo: 'R$ 239,20' },
    { categoria: 'Acessórios', tipo: 'Suportes', desconto: 15, imagem: 'octoo-notebook.png', nome: 'Octoo Suporte para Notebook', original: 'R$ 149,00', novo: 'R$ 126,65' },

    // CAPAS E PELÍCULAS
    { categoria: 'Acessórios', tipo: 'Capas e Películas', desconto: 20, imagem: 'spigen-s24.png', nome: 'Spigen Liquid Air Galaxy S24', original: 'R$ 149,00', novo: 'R$ 119,20' },
    { categoria: 'Acessórios', tipo: 'Capas e Películas', desconto: 15, imagem: 'esr-iphone16.png', nome: 'ESR Película iPhone 16', original: 'R$ 99,00', novo: 'R$ 84,15' },

    // POWER BANKS
    { categoria: 'Acessórios', tipo: 'Power Banks', desconto: 20, imagem: 'baseus-20000.png', nome: 'Baseus 20.000mAh 20W', original: 'R$ 249,00', novo: 'R$ 199,20' },
    { categoria: 'Acessórios', tipo: 'Power Banks', desconto: 15, imagem: 'anker-powercore.png', nome: 'Anker PowerCore 10.000mAh', original: 'R$ 299,00', novo: 'R$ 254,15' },

    // ARMAZENAMENTO PORTÁTIL
    { categoria: 'Acessórios', tipo: 'Armazenamento Portátil', desconto: 20, imagem: 'sandisk-extreme-1tb.png', nome: 'SanDisk Extreme SSD 1TB', original: 'R$ 799,00', novo: 'R$ 639,20' },
    { categoria: 'Acessórios', tipo: 'Armazenamento Portátil', desconto: 15, imagem: 'kingston-exodia-128.png', nome: 'Kingston DataTraveler Exodia 128GB', original: 'R$ 89,00', novo: 'R$ 75,65' },

    // LEITORES DE CARTÃO
    { categoria: 'Acessórios', tipo: 'Leitores de Cartão', desconto: 20, imagem: 'ugreen-leitor-sd.png', nome: 'Ugreen Leitor USB 3.0 SD/TF', original: 'R$ 129,00', novo: 'R$ 103,20' },
    { categoria: 'Acessórios', tipo: 'Leitores de Cartão', desconto: 15, imagem: 'kingston-mobilelite.png', nome: 'Kingston MobileLite Plus', original: 'R$ 149,00', novo: 'R$ 126,65' },

    // DOCK STATIONS
    { categoria: 'Acessórios', tipo: 'Dock Stations', desconto: 18, imagem: 'dell-wd19s.png', nome: 'Dell WD19S', original: 'R$ 1.499,00', novo: 'R$ 1.229,18' },
    { categoria: 'Acessórios', tipo: 'Dock Stations', desconto: 20, imagem: 'ugreen-revodok.png', nome: 'Ugreen Revodok Pro 13 em 1', original: 'R$ 899,00', novo: 'R$ 719,20' }
]

export const OFERTAS: Oferta[] = ofertasSemId.map
(
    (produto, index) =>
    ({
        id: index + 1, ...produto
    })
)

const slidesAp = document.getElementById('swiper-wrapper1');
const slidesApPresentation = document.getElementById('swiper-wrapper2');
let cont;
let contPalavras = 0;

class SliderAp {
    activeSwiper(src, alt, swiperSlide) {
        if(swiperSlide) {
            swiperSlide.setAttribute('src', src);
            swiperSlide.setAttribute('alt', alt);
        }
        
        if(cont === 'first') {
            mostrarPrimeiroSlide();
            
            esconderPagina();

            const segundoClickSlider = [];
            for(let i = 0; i < 8; i++) {
                segundoClickSlider[i] = document.querySelector('#fotoSwiper' + i);

                if(segundoClickSlider[i] == null) {
                    console.error('error ao localizar imagem!');
                }else {
                    segundoClickSlider[i].addEventListener('click', ()=> {
                        esconderPrimeiroSlide();

                        mostrarPagina();
                    });
                }
            }
        }

        if(cont === 'second') {
            mostrarSegundoSlide();

            esconderPagina();

            const segundoClickSlider = [];
            for(let i = 0; i < 6; i++) {
                segundoClickSlider[i] = document.querySelector('#fotoSwiper1-' + i);

                if(segundoClickSlider[i] == null) {
                    console.error('error ao localizar imagem!');
                }else {
                    segundoClickSlider[i].addEventListener('click', ()=> {
                        esconderSegundoSlide();
    
                        mostrarPagina();
                    });
                }
            }
        }
    }
}

const sliderAp = new SliderAp();
for(let i = 0; i <= 8; i++) {
    const slideFotoBef = [];
    const slideFotoBefSecond = [];
    slideFotoBef[i] = document.querySelector('#foto' + i);
    slideFotoBefSecond[i] = document.querySelector('#foto2-' + i);

    if(slideFotoBef[i] || slideFotoBefSecond[i]) {
        slidesAp.addEventListener('click', ()=> {
            const srcSlideFotoBef = [];
            srcSlideFotoBef[i] = slideFotoBef[i].getAttribute('src');
            
            const altSlideFotoBef = [];
            altSlideFotoBef[i] = slideFotoBef[i].getAttribute('src');

            const swiperSlide = document.querySelector('#fotoSwiper' + i);

            cont = 'first';

            sliderAp.activeSwiper(srcSlideFotoBef[i], altSlideFotoBef[i], swiperSlide);
        });

        if(i < 3) {
            slidesApPresentation.addEventListener('click', ()=> {
                const srcSlideFotoBefSecond = [];
                srcSlideFotoBefSecond[i] = slideFotoBefSecond[i].getAttribute('src');
                
                const altSlideFotoBefSecond = [];
                altSlideFotoBefSecond[i] = slideFotoBefSecond[i].getAttribute('alt');
    
                const swiperSlideSecond = document.querySelector('#fotoSwiper1-' + i);
    
                cont = 'second';
    
                sliderAp.activeSwiper(srcSlideFotoBefSecond[i], altSlideFotoBefSecond[i], swiperSlideSecond);
            });
        }else {
            slidesApPresentation.addEventListener('click', ()=> {
                const srcSlideFotoBefSecond = [];
                srcSlideFotoBefSecond[i] = slideFotoBefSecond[i].getAttribute('src');
                
                const altSlideFotoBefSecond = [];
                altSlideFotoBefSecond[i] = slideFotoBefSecond[i].getAttribute('alt');
    
                const swiperSlideSecond = document.querySelector('#fotoSwiper1-' + i);
    
                cont = 'second';
    
                sliderAp.activeSwiper(srcSlideFotoBefSecond[i], altSlideFotoBefSecond[i], swiperSlideSecond);
            });
        }
    }
}

//funções usadas para esconder e mostrar itens ao entrar no modo slider
function mostrarPrimeiroSlide() {
    const swiperBackg = document.getElementById('swiperFotoSlide');
    if(swiperBackg) {
        swiperBackg.classList.add('sv1');
        swiperBackg.classList.remove('transp');
    }
}

function esconderPrimeiroSlide() {
    const swiperBackg = document.getElementById('swiperFotoSlide');
    if(swiperBackg) {
        swiperBackg.classList.remove('sv1');
        swiperBackg.classList.add('transp');
    }
}

function mostrarSegundoSlide() {
    const swiperBackg = document.getElementById('swiperFotoSlide1');
    if(swiperBackg) {
        swiperBackg.classList.add('sv1');
        swiperBackg.classList.remove('transp');
    }
}

function esconderSegundoSlide() {
    const swiperBackg = document.getElementById('swiperFotoSlide1');
    if(swiperBackg) {
        swiperBackg.classList.remove('sv1');
        swiperBackg.classList.add('transp');
    }
}

function esconderPagina() {
    const headerTransp = document.getElementById('header');
    if(headerTransp) {
        headerTransp.classList.remove('h');
        headerTransp.classList.add('transp');
    }

    const introTransp = document.getElementById('ap-intro');
    if(introTransp) {
        introTransp.classList.remove('ap-intro');
        introTransp.classList.add('transp');
    }

    const faixaLaranja = document.getElementById('slidesAp');
    faixaLaranja.classList.remove('slidesAp');
    faixaLaranja.classList.add('bh2');

    const slidesApPresenTransp = document.getElementById('slide1');
    slidesApPresenTransp.classList.add('transp');
    slidesApPresenTransp.classList.remove('slidesAp__presentation');

    const slidesApPresenTransp2 = document.getElementById('slide2');
    slidesApPresenTransp2.classList.add('transp');
    slidesApPresenTransp2.classList.remove('slidesAp__presentation');

    const buttonPrev = document.getElementById('buttonPrev');
    buttonPrev.classList.add('buttonPrev');
    buttonPrev.classList.remove('swiper-button-prev-ap');

    const buttonNext = document.getElementById('buttonNext');
    buttonNext.classList.add('buttonNext');
    buttonNext.classList.remove('swiper-button-next-ap');

    const buttonPrev2 = document.getElementById('buttonPrev2');
    buttonPrev2.classList.add('buttonPrev');
    buttonPrev2.classList.remove('swiper-button-prev-ap');

    const buttonNext2 = document.getElementById('buttonNext2');
    buttonNext2.classList.add('buttonNext');
    buttonNext2.classList.remove('swiper-button-next-ap');

    const datasheet = document.getElementById('datasheet');
    if(datasheet) {
        datasheet.classList.add('transp');
        datasheet.classList.remove('datasheet');
    }

    const fotoLocation = document.getElementById('location');
    if(fotoLocation) {
        fotoLocation.classList.add('transp');
        fotoLocation.classList.remove('location');
    }

    const talkToMe = document.getElementById('talkToMe');
    if(talkToMe) {
        talkToMe.classList.add('transp');
        talkToMe.classList.remove('talkToMe');
    }

    const footer = document.getElementById('footer');
    if(footer) {
        footer.classList.add('transp');
        footer.classList.remove('footer');
    }

    const copyright = document.getElementById('copyright');
    if(copyright) {
        copyright.classList.add('transp');
        copyright.classList.remove('copyright');
    }

    document.body.classList.add('hb1');

    document.querySelector('html').classList.add('bg1');
}

function mostrarPagina() {
    const headerTransp = document.getElementById('header');
    headerTransp.classList.remove('transp');
    headerTransp.classList.add('h');

    const introTransp = document.getElementById('ap-intro');
    if(introTransp) {
        introTransp.classList.remove('transp');
        introTransp.classList.add('ap-intro');
    }

    const faixaLaranja = document.getElementById('slidesAp');
    faixaLaranja.classList.add('slidesAp');
    faixaLaranja.classList.remove('bh2');

    const slidesApPresenTransp = document.getElementById('slide1');
    slidesApPresenTransp.classList.remove('transp');
    slidesApPresenTransp.classList.add('slidesAp__presentation');

    const slidesApPresenTransp2 = document.getElementById('slide2');
    slidesApPresenTransp2.classList.remove('transp');
    slidesApPresenTransp2.classList.add('slidesAp__presentation');

    const datasheet = document.getElementById('datasheet');
    if(datasheet) {
        datasheet.classList.remove('transp');
        datasheet.classList.add('datasheet');
    }

    const fotoLocation = document.getElementById('location');
    if(fotoLocation) {
        fotoLocation.classList.remove('transp');
        fotoLocation.classList.add('location');
    }

    const talkToMe = document.getElementById('talkToMe');
    if(talkToMe) {
        talkToMe.classList.remove('transp');
        talkToMe.classList.add('talkToMe');
    }

    const footer = document.getElementById('footer');
    if(footer) {
        footer.classList.remove('transp');
        footer.classList.add('footer');
    }

    const copyright = document.getElementById('copyright');
    if(copyright) {
        copyright.classList.remove('transp');
        copyright.classList.add('copyright');
    }

    const swiperBackg = document.getElementById('swiperFotoSlide');
    if(swiperBackg) {
        swiperBackg.classList.remove('sv1');
        swiperBackg.classList.add('transp');
    }

    document.body.classList.remove('hb1');

    document.querySelector('html').classList.remove('bg1');
}

const botaoFiltroInicial = document.getElementById('botaoFiltroInicial');

import {FuncoesHome} from '../js-home/FuncoesHome.js';
const ativadorHome = new FuncoesHome();

ativadorHome.ativaFiltro(botaoFiltroInicial);

const menuLateralImagem = document.getElementById('menuLateral');

const loginImagem = document.getElementById('areaLogin');

const botaoAtivador = document.getElementById('ativadorLerMais');

const botaoAtivadorProximidades = document.getElementById('clickMoreInfo');

import {FuncoesPrincipais} from '../FuncoesPrincipais.js';
const ativadorPrincipal = new FuncoesPrincipais();

ativadorPrincipal.carregamento();
ativadorPrincipal.ativaMenuLateral(menuLateralImagem);
ativadorPrincipal.ativaLogin(loginImagem);
ativadorPrincipal.lerMais(botaoAtivador);
ativadorPrincipal.lerMaisProximidades(botaoAtivadorProximidades);
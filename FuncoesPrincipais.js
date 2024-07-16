export class FuncoesPrincipais{
    carregamento() {
        window.addEventListener("DOMContentLoaded", function() {
            const carregandoAnimacao =()=> {
                this.document.getElementById("main").classList.remove('main');

                this.document.getElementById("carregando-conteudo").style.display = "none";
             }
             this.setTimeout(carregandoAnimacao, 500);
         });
    }

    ativaMenuLateral(menuLateralImagem) {
        window.addEventListener('DOMContentLoaded', ()=> {
            menuLateralImagem.addEventListener('click', ()=> {
                const menuLateralAct = document.getElementById('menuLateralAct');
        
                const localAncoras = document.getElementById('menuLateralNav');
                const ancoras = [];

                const paginaAtual = window.location.href;
                var linkPagina;

                if(paginaAtual === 'http://127.0.0.1:5500/pages/apartamentos/SVM.html') {
                    linkPagina = 'SVM';
                }else if(paginaAtual === 'http://127.0.0.1:5500/pages/apartamentos/AMO.html') {
                    linkPagina = 'AMO';
                }else if(paginaAtual === 'http://127.0.0.1:5500/pages/apartamentos/MDP.html') {
                    linkPagina = 'MDP';
                }else if(paginaAtual === 'http://127.0.0.1:5500/pages/apartamentos/PDP.html') {
                    linkPagina = 'PDP';
                }else if(paginaAtual === 'http://127.0.0.1:5500/pages/aps.html') {
                    linkPagina = 'aps';
                }

                console.log(linkPagina);
        
                menuLateralAct.classList.remove('h-mlr-act');
                menuLateralAct.classList.remove('h-mlr-act-visivel-saida');
                menuLateralAct.classList.add('h-mlr-act-visivel');

                document.getElementById('overlay').classList.add('active');
        
                for(let i = 0; i < 6; i++) {
                    ancoras[i] = document.createElement('a');
                    ancoras[i].classList.remove('h-mlr-act-visivel-saida');
                    ancoras[i].classList.add('h-mlr-act-menu-a');
                    if(i == 0) {
                        ancoras[i].innerHTML = 'home';
                        if(window.location.href === 'http://127.0.0.1:5500/pages/apartamentos/' + linkPagina + '.html') {
                            ancoras[i].setAttribute('href', '../../index.html');
                        }else if(window.location.href === 'http://127.0.0.1:5500/pages/' + linkPagina + '.html') {
                            ancoras[i].setAttribute('href', '../index.html');
                        }else {
                            ancoras[i].setAttribute('href', 'index.html');
                        }
                    }else if(i == 1) {
                        ancoras[i].innerHTML = 'central de ajuda';
                        if(window.location.href === 'http://127.0.0.1:5500/pages/apartamentos/' + linkPagina + '.html') {
                            ancoras[i].setAttribute('href', '../../paginasGerais/ajuda.html');
                        }else if(window.location.href === 'http://127.0.0.1:5500/pages/' + linkPagina + '.html') {
                            ancoras[i].setAttribute('href', '../paginasGerais/ajuda.html');
                        }else {
                            ancoras[i].setAttribute('href', 'paginasGerais/ajuda.html');
                        }
                    }else if(i == 2) {
                        ancoras[i].innerHTML = 'feedback';
                        if(window.location.href === 'http://127.0.0.1:5500/pages/apartamentos/' + linkPagina + '.html') {
                            ancoras[i].setAttribute('href', '../../paginasGerais/feedback.html');
                        }else if(window.location.href === 'http://127.0.0.1:5500/pages/' + linkPagina + '.html') {
                            ancoras[i].setAttribute('href', '../paginasGerais/feedback.html');
                        }else {
                            ancoras[i].setAttribute('href', 'paginasGerais/feedback.html');
                        }
                    }else if(i == 3) {
                        ancoras[i].innerHTML = 'apartamentos';
                        if(window.location.href === 'http://127.0.0.1:5500/pages/apartamentos/' + linkPagina + '.html') {
                            ancoras[i].setAttribute('href', '../aps.html');
                        }else if(window.location.href === 'http://127.0.0.1:5500/pages/' + linkPagina + '.html') {
                            ancoras[i].setAttribute('href', 'aps.html');
                        }else {
                            ancoras[i].setAttribute('href', 'pages/aps.html');
                        }
                    }else if(i == 4) {
                        ancoras[i].innerHTML = 'casas';
                        if(window.location.href === 'http://127.0.0.1:5500/pages/apartamentos/' + linkPagina + '.html') {
                            ancoras[i].setAttribute('href', '../../paginasGerais/error.html');
                        }else if(window.location.href === 'http://127.0.0.1:5500/pages/' + linkPagina + '.html') {
                            ancoras[i].setAttribute('href', '../paginasGerais/error.html');
                        }else {
                            ancoras[i].setAttribute('href', 'paginasGerais/error.html');
                        }
                    }else if(i == 5) {
                        ancoras[i].innerHTML = 'Sobre mim';
                        if(window.location.href === 'http://127.0.0.1:5500/pages/apartamentos/' + linkPagina + '.html') {
                            ancoras[i].setAttribute('href', '../../paginasGerais/sb.html');
                        }else if(window.location.href === 'http://127.0.0.1:5500/pages/' + linkPagina + '.html') {
                            ancoras[i].setAttribute('href', '../paginasGerais/sb.html');
                        }else {
                            ancoras[i].setAttribute('href', 'paginasGerais/sb.html');
                        }
                    }
                    localAncoras.appendChild(ancoras[i]);
                }
            });
        
            const animacaoSaida =()=> {
                const menuLateralAct = document.getElementById('menuLateralAct');
                const localAncoras = document.getElementById('menuLateralNav');
                const ancoras = document.querySelectorAll('.h-mlr-act-menu-a');
        
                menuLateralAct.classList.remove('h-mlr-act-visivel');
                menuLateralAct.classList.add    ('h-mlr-act-visivel-saida');
        
                document.getElementById('overlay').classList.remove('active');
        
                for(let i = 0; i < ancoras.length; i++) {
                    ancoras[i].classList.add('h-mlr-act-a-animacao-saida');
                }
            
                const displayNone =()=> {
                    menuLateralAct.classList.add('h-mlr-act');
                    for(let i = 0; i < ancoras.length; i++) {
                        localAncoras.removeChild(ancoras[i]);
                    }
                }
                setTimeout(displayNone, 1300);
            }
            document.getElementById('overlay').addEventListener('click', animacaoSaida);
        });
    }

    ativaLogin(loginImagem) {
        window.addEventListener('DOMContentLoaded', ()=> {
            loginImagem.addEventListener('click', ()=> {
                window.location.replace('login.html');
            });
        });
    }

    ativaSlider(swiper) {
        window.addEventListener('DOMContentLoaded', ()=> {
            swiper.addEventListener('click', ()=> {
                const menuLateralAct = document.getElementById('menuLateralAct');
        
                const localAncoras = document.getElementById('menuLateralNav');
                const ancoras = [];
        
                menuLateralAct.classList.remove('h-mlr-act');
                menuLateralAct.classList.remove('h-mlr-act-visivel-saida');
                menuLateralAct.classList.add('h-mlr-act-visivel');

                document.getElementById('overlay').classList.add('active');
        
            const animacaoSaida =()=> {
                document.getElementById('overlay').classList.remove('active');
            
                const displayNone =()=> {
                    menuLateralAct.classList.add('h-mlr-act');
                    for(let i = 0; i < ancoras.length; i++) {
                        localAncoras.removeChild(ancoras[i]);
                    }
                }
                setTimeout(displayNone, 1300);
            }
            document.getElementById('overlay').addEventListener('click', animacaoSaida);
            });
        });
    }

    lerMais(botaoAtivador) {
        window.addEventListener("DOMContentLoaded", function() {
            let cont = 0;
            botaoAtivador.addEventListener('click', ()=> {
                cont++;

                const paragrafos = document.querySelectorAll('.hp2vm');

                switch(cont % 2 != 0) {
                    case true:
                        for(let i = 0; i < paragrafos.length; i++) {
                            paragrafos[i].classList.remove('hp2vm');
                            paragrafos[i].classList.add('paragrafos-visiveis');
    
                            botaoAtivador.innerHTML = 'Ler menos...';

                            console.log(this.window.location.href);
                        }
                    break;
                    case false:
                        const paragrafosASumir = this.document.querySelectorAll('.paragrafos-visiveis');

                        for(let i = 0; i < paragrafosASumir.length; i++) {
                            paragrafosASumir[i].classList.add('hp2vm');
                            paragrafosASumir[i].classList.remove('paragrafos-visiveis');
    
                            botaoAtivador.innerHTML = 'Ler mais...';
                        }
                    break;
                }
            });
        });
    }

    lerMaisProximidades(botaoAtivadorProximidades) {
        window.addEventListener('DOMContentLoaded', ()=> {
            let cont = 0;
            botaoAtivadorProximidades.addEventListener('click', ()=> {
                const paragrafoInvisivel = document.getElementById('moreInfo');

                cont++;

                switch(cont % 2 != 0) {
                    case true:
                        paragrafoInvisivel.classList.remove('dtpfn');
                        paragrafoInvisivel.classList.add('dtpfb');

                        botaoAtivadorProximidades.innerHTML = 'Clique para ver Menos';
                    break;
                    case false:
                        paragrafoInvisivel.classList.add('dtpfn');
                        paragrafoInvisivel.classList.remove('dtpfb');

                        botaoAtivadorProximidades.innerHTML = 'Clique para ver mais';
                }
            });
        });
    }
}
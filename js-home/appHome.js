const menuLateralImagem = document.getElementById('menuLateral');

const botaoFiltroInicial = document.getElementById('botaoFiltroInicial');

const loginImagem = document.getElementById('areaLogin');

import {FuncoesHome} from './FuncoesHome.js';
const ativadorHome = new FuncoesHome();

ativadorHome.ativaFiltro(botaoFiltroInicial);
ativadorHome.ativaInicio();

import {FuncoesPrincipais} from '../FuncoesPrincipais.js';
const ativadorPrincipal = new FuncoesPrincipais();

ativadorPrincipal.carregamento();
ativadorPrincipal.ativaMenuLateral(menuLateralImagem);
ativadorPrincipal.ativaLogin(loginImagem);
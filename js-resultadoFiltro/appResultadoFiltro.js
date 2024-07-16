const menuLateralImagem = document.getElementById('menuLateral');

const loginImagem = document.getElementById('areaLogin');

import {FuncoesPrincipais} from '../FuncoesPrincipais.js';
const ativadorPrincipal = new FuncoesPrincipais();

ativadorPrincipal.carregamento();
ativadorPrincipal.ativaMenuLateral(menuLateralImagem);
ativadorPrincipal.ativaLogin(loginImagem);
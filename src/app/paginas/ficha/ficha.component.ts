import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../../Shared/cabecalho/cabecalho.component';
import { InfoJogadorComponent } from './componentes/info-jogador/info-jogador.component';
import { StatusJogadorComponent } from './componentes/status-jogador/status-jogador.component';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { PericiasComponent } from './componentes/pericias/pericias.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { AcoesComponent } from './componentes/acoes/acoes.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [
    FormsModule,
    CabecalhoComponent,
    AtributosComponent,
    PericiasComponent,
    InfoJogadorComponent,
    StatusJogadorComponent,
    InventarioComponent,
    AcoesComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css',
})
export class FichaComponent {


  exibir(aba: string) {
    console.log('FUNFfouou')
    if (aba === 'pericias') {
      let pericias = document.querySelector(".pericias-aba")
      pericias?.classList.remove('esconder')
      let periciasBotao = document.querySelector(".pericias-botao")
      periciasBotao?.classList.add('activebutton')

      let acoes = document.querySelector(".acoes-aba")
      acoes?.classList.add('esconder')
      let acoesBotao = document.querySelector(".acoes-botao")
      acoesBotao?.classList.remove('activebutton')

      let inventario = document.querySelector(".inventario-aba")
      inventario?.classList.add('esconder')
      let inventarioBotao = document.querySelector(".inventario-botao")
      inventarioBotao?.classList.remove('activebutton')
    } else if (aba === 'acoes') {

      let pericias = document.querySelector(".pericias-aba")
      pericias?.classList.add('esconder')
      let periciasBotao = document.querySelector(".pericias-botao")
      periciasBotao?.classList.remove('activebutton')

      let acoes = document.querySelector(".acoes-aba")
      acoes?.classList.remove('esconder')
      let acoesBotao = document.querySelector(".acoes-botao")
      acoesBotao?.classList.add('activebutton')

      let inventario = document.querySelector(".inventario-aba")
      inventario?.classList.add('esconder')
      let inventarioBotao = document.querySelector(".inventario-botao")
      inventarioBotao?.classList.remove('activebutton')
    } else if (aba === 'inventario') {

      let pericias = document.querySelector(".pericias-aba")
      pericias?.classList.add('esconder')
      let periciasBotao = document.querySelector(".pericias-botao")
      periciasBotao?.classList.remove('activebutton')

      let acoes = document.querySelector(".acoes-aba")
      acoes?.classList.add('esconder')
      let acoesBotao = document.querySelector(".acoes-botao")
      acoesBotao?.classList.remove('activebutton')

      let inventario = document.querySelector(".inventario-aba")
      inventario?.classList.remove('esconder')
      let inventarioBotao = document.querySelector(".inventario-botao")
      inventarioBotao?.classList.add('activebutton')
    }
  }
}


window.onload = function esconder(){
  let pericias = document.querySelector(".pericias-aba")
  pericias?.classList.add('esconder')
  let acoes = document.querySelector(".acoes-aba")
  acoes?.classList.add('esconder')
  let inventarioBotao = document.querySelector(".inventario-botao")
  inventarioBotao?.classList.add('activebutton')
}

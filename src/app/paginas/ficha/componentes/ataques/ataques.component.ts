import { AtributosService } from '../../../../Shared/servicos/atributos.service';
import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {AtaquesService} from "../../../../Shared/servicos/ataques.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-ataques',
  standalone: true,
  imports: [MatExpansionModule, MatButton,],
  templateUrl: './ataques.component.html',
  styleUrl: './ataques.component.css'
})
export class AtaquesComponent {

  constructor(public AtributosService:AtributosService, public AtaquesService:AtaquesService){}
  panelOpenState: boolean = false;

  adicionarAtaque() {

    let inputAtaque = (<HTMLInputElement>document.getElementById("input-ataque")).value
    let atributo = (<HTMLSelectElement>document.getElementById("atributo-ataque")).value
    let proficiencia = (<HTMLSelectElement>document.getElementById("grau-ataque")).value
    let inputDano = (<HTMLInputElement>document.getElementById("input-dano")).value
    let inputTipo = (<HTMLInputElement>document.getElementById("input-tipo")).value
    let inputQntdChar = inputDano.split("d")
    let inputQntd = Number(inputQntdChar[0])
    let inputDado = Number(inputQntdChar[1])

    let bonusProficiencia = this.AtributosService.grauTreinamento(proficiencia)
    let valorGrau;
    if(bonusProficiencia > 0){
      valorGrau = 1
    } else{
      valorGrau = 0
    }
    let bonus = this.AtaquesService.adicionarAoObjeto(inputAtaque, atributo, bonusProficiencia, inputQntd, inputDado, inputTipo, valorGrau)

    let elementoPai = document.getElementById("ataques")
    let divElemento = document.createElement('div')
    let elementoNome = document.createElement('button')
    elementoNome.classList.add("ataque", "ff-inter")
    let textoNome = document.createTextNode(inputAtaque)
    elementoNome.appendChild(textoNome)
    divElemento.appendChild(elementoNome)

    let elementoBonus = document.createElement('button')
    elementoBonus.classList.add("bonus", "ff-inter")

    let bonusTextoString = String(bonus)
    let bonusTexto

    if(bonus > 0){
      bonusTexto = document.createTextNode("+" + bonusTextoString)
    } else{
      bonusTexto = document.createTextNode(bonusTextoString)
    }

    elementoBonus.appendChild(bonusTexto)
    divElemento.appendChild(elementoBonus)

    let elementoDano = document.createElement('button')
    elementoDano.classList.add("dano", "ff-inter")

    let textoDano

    if (inputDano === ""){
      textoDano = document.createTextNode("" + inputTipo)
    } else{
      textoDano = document.createTextNode( inputDano + "/" + inputTipo)
    }

    elementoDano.appendChild(textoDano)
    divElemento.classList.add("ataques-div")
    divElemento.appendChild(elementoDano)
    elementoPai?.appendChild(divElemento)

    this.panelOpenState = false;
  }



}

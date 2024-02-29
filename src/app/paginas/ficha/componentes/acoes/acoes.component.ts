import {AtributosService} from '../../../../Shared/servicos/atributos.service';
import {Component} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {AtaquesService} from "../../../../Shared/servicos/ataques.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-acoes',
  standalone: true,
  imports: [MatExpansionModule, MatButton,],
  templateUrl: './acoes.component.html',
  styleUrl: './acoes.component.css'
})
export class AcoesComponent {

  constructor(public AtributosService:AtributosService, public AtaquesService:AtaquesService){}
  panelOpenState: boolean = false;

  adicionarAtaque() {

    let inputAtaque = this.coletarValorInput("input-ataque")
    let atributo = this.coletarValorInput("atributo-ataque")
    let proficiencia = this.coletarValorInput("grau-ataque")
    let inputDano = this.coletarValorInput("input-dano")
    let inputTipo = this.coletarValorInput("input-tipo")

    let inputQntdChar = this.separarNumberDano(inputDano)

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

    this.adicionarAtaqueHTML(inputAtaque, bonus, inputDano, inputTipo)
    this.panelOpenState = false;
  }

  coletarValorInput(inputTexto: string){
    return (<HTMLInputElement>document.getElementById(inputTexto)).value;
  }

  separarNumberDano(dado: string){
    return dado.split('d')
  }

  adicionarAtaqueHTML(inputAtaque: string, bonus: number, inputDano: string, inputTipo: string){

    let elementoPai = document.getElementById("ataques")

    let elementoDiv = document.createElement('div')
    let ataqueElemento = document.createElement('button')
    let elementoBonus = document.createElement('button')
    let elementoDano = document.createElement('button')

    let bonusTextoString = String(bonus)
    let bonusTexto

    if(bonus > 0){
      bonusTexto = document.createTextNode("+" + bonusTextoString)
    } else{
      bonusTexto = document.createTextNode(bonusTextoString)
    }

    let textoDano

    if (inputDano === ""){
      textoDano = document.createTextNode("" + inputTipo)
    } else{
      textoDano = document.createTextNode( inputDano + "/" + inputTipo)
    }

    ataqueElemento.classList.add("ataque", "vt323", "borda-4px-ataques", "background-input-botao", "borda-4px-ataques")
    elementoBonus.classList.add("bonus", "vt323", "borda-4px-ataques", "background-input-botao", "borda-4px-ataques")
    elementoDano.classList.add("dano", "vt323", "borda-4px-ataques", "background-input-botao", "borda-4px-ataques")

    let textoNomeAtaque = document.createTextNode(inputAtaque)

    elementoDiv.classList.add('coluna-ataque')
    ataqueElemento.appendChild(textoNomeAtaque)
    elementoDiv.appendChild(ataqueElemento)
    elementoBonus.appendChild(bonusTexto)
    elementoDiv.appendChild(elementoBonus)
    elementoDano.appendChild(textoDano)

    elementoDiv.classList.add("ataques-div")

    elementoDiv.appendChild(elementoDano)

    elementoPai?.appendChild(elementoDiv)

  }



}

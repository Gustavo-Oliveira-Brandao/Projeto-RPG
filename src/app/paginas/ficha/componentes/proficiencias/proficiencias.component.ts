import { Component } from '@angular/core';
import {MatExpansionPanel, MatExpansionPanelHeader} from "@angular/material/expansion";

@Component({
  selector: 'app-proficiencias',
  standalone: true,
    imports: [
        MatExpansionPanel,
        MatExpansionPanelHeader
    ],
  templateUrl: './proficiencias.component.html',
  styleUrl: './proficiencias.component.css'
})
export class ProficienciasComponent {
  panelOpenState: boolean = false;

  adicionarProficiencia(){

    let inputProficiencia = this.coletarValorInput("input-proficiencia");
    let atributoProficiencia = this.coletarValorInput("atributo-proficiencia");
    let tipoProficiencia = this.coletarValorInput("tipo-proficiencia");

    let divPrincipal = document.getElementById('proficiencias')
    let divFilho = document.createElement('div')
    divFilho.classList.add('linha-proficiencia')

    let spanProficiencia = this.criarElemento(inputProficiencia)
    let spanAtributo = this.criarElemento(atributoProficiencia)
    spanAtributo.classList.add('atributo-proficiencia')
    let spanTipo = this.criarElemento(tipoProficiencia)

    divFilho.appendChild(spanProficiencia)
    divFilho.appendChild(spanAtributo)
    divFilho.appendChild(spanTipo)
    divPrincipal?.appendChild(divFilho)

    this.panelOpenState = false;
  }

  criarElemento(input: string){
    let spanTexto = document.createElement('span')
    let textoNode = document.createTextNode(input)
    if (input == this.coletarValorInput('atributo-proficiencia')) {
      spanTexto.classList.add('borda-4px-proficiencia', 'atributo-proficiencia')
    } else{
    spanTexto.classList.add('borda-4px-proficiencia', 'input')
    }
    spanTexto.appendChild(textoNode)
    return spanTexto;
  }
  coletarValorInput(inputValor: string){
    return (<HTMLInputElement>document.getElementById(inputValor)).value
  }
}

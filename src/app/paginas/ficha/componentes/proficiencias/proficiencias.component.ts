import { Component } from '@angular/core';
import {MatExpansionPanel, MatExpansionPanelHeader} from "@angular/material/expansion";
import {ProficienciaService} from "../../../../Shared/servicos/proficiencia.service";

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

  constructor(protected ProficienciaService:ProficienciaService) {
  }

  adicionarProficiencia(){

    let inputProficiencia = this.coletarValorInput("input-proficiencia");
    let atributoProficiencia = this.coletarValorInput("atributo-proficiencia");
    let tipoProficiencia = this.coletarValorInput("tipo-proficiencia");

    this.ProficienciaService.criarProficiencia(inputProficiencia, atributoProficiencia, tipoProficiencia)
    this.panelOpenState = false;
  }
  coletarValorInput(inputValor: string){
    return (<HTMLInputElement>document.getElementById(inputValor)).value
  }
}

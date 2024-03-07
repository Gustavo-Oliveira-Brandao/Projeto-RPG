import { Component } from '@angular/core';
import {MatExpansionPanel, MatExpansionPanelHeader} from "@angular/material/expansion";
import {ReactiveFormsModule} from "@angular/forms";
import {InventarioService} from "../../../../Shared/servicos/inventario.service";

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [
    MatExpansionPanel,
    MatExpansionPanelHeader,
    ReactiveFormsModule
  ],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent {

  panelOpenState: boolean = false;

  constructor(protected InventarioService:InventarioService) {}
  adicionarItem(){
    let nomeItem = this.coletarValorInput("input-nome-item")
    let pesoItem = this.coletarValorInput("input-peso-item")
    let descricaoItem = this.coletarValorInput('input-descricao-item')
    let valorItem = this.coletarValorInput("input-valor-item")

    this.InventarioService.criarItem(nomeItem, pesoItem, descricaoItem, valorItem)
    this.panelOpenState = false;
  }

  coletarValorInput(inputTexto: string){
    return (<HTMLInputElement>document.getElementById(inputTexto)).value;
  }
}

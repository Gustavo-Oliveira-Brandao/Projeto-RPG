import {AtributosService} from '../../../../Shared/servicos/atributos.service';
import {Component} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {AtaquesService} from "../../../../Shared/servicos/ataques.service";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-acoes',
  standalone: true,
  imports: [MatExpansionModule, MatButton, FormsModule, NgForOf,],
  templateUrl: './acoes.component.html',
  styleUrl: './acoes.component.css'
})
export class AcoesComponent {

  constructor(public AtributosService:AtributosService, public AtaquesService:AtaquesService){}
  panelOpenState: boolean = false;

  adicionarAtaque() {
    let nomeAtaque = this.coletarValorInput("input-ataque")
    let danoAtaque = this.coletarValorInput("input-dano")
    let tipoAtaque = this.coletarValorInput("input-tipo")
    let atributoAtaque = this.coletarValorInput("atributo-ataque")
    let grauAtaque = this.coletarValorInput("grau-ataque")
    let qntdAcaoAtaque = this.coletarValorInput("qntd-acao")

    this.AtaquesService.adicionarAoArray(nomeAtaque, danoAtaque, tipoAtaque, atributoAtaque, grauAtaque, qntdAcaoAtaque)
    this.panelOpenState = false;
  }

  coletarValorInput(inputTexto: string){
    return (<HTMLInputElement>document.getElementById(inputTexto)).value;
  }

}

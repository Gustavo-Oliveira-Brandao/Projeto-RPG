import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AtributosService} from "../../../../Shared/servicos/atributos.service";
import {AtaquesService} from "../../../../Shared/servicos/ataques.service";

@Component({
  selector: 'app-info-jogador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './info-jogador.component.html',
  styleUrl: './info-jogador.component.css'
})
export class InfoJogadorComponent {

 constructor(public AtributosService:AtributosService, public AtaquesService:AtaquesService) {
 }

}

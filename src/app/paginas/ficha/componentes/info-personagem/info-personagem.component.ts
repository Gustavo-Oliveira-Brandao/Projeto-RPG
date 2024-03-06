import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AtributosService} from "../../../../Shared/servicos/atributos.service";

@Component({
  selector: 'app-info-personagem',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './info-personagem.component.html',
  styleUrl: './info-personagem.component.css'
})
export class InfoPersonagemComponent {
  constructor(protected AtributosService:AtributosService) {
  }
}

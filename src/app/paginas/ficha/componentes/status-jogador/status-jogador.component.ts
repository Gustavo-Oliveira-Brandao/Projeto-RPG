import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-status-jogador',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './status-jogador.component.html',
  styleUrl: './status-jogador.component.css'
})
export class StatusJogadorComponent {

  statusJogador = {
    vidaMax: {
      id: 'pvMax',
      atributo: 0,
    },

    vidaAtual: {
      id: 'pvAtual',
      atributo: 0,
    },

    vidaTemporaria: {
      id: 'pvTemporario',
      atributo: 0
    },

    iniciativa: {
      id: 'iniciativa',
      atributo: 0,
      tipoAtributo: 'destreza',
    },

    ca: {
      id: 'classeArmadura',
      atributo: 10,
    },

    velocidade: {
      id: 'velocidade',
      atributo: 0,
    },
  };

}

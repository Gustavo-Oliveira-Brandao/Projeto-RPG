import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info-jogador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './info-jogador.component.html',
  styleUrl: './info-jogador.component.css'
})
export class InfoJogadorComponent {

  personagem = {
    nome: {
      id: '',
    },
    raca: {
      id: ''
    },
    classe: {
      id: ''
    },
    nivel: {
      atributo: 1
    },

    exp: {
      atributo: 0
    }

  }

}

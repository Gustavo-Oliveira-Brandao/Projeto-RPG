import { Injectable } from '@angular/core';
import {AtributosService} from "./atributos.service";

@Injectable({
  providedIn: 'root'
})
export class RolagensService {

  constructor(private AtributosService:AtributosService) {}
  dados = {
    d4: {
      id: 'd4',
      sides: 4,
    },

    d6: {
      id: 'd6',
      sides: 6,
    },

    d8: {
      id: 'd8',
      sides: 8,
    },

    d10: {
      id: 'd10',
      sides: 10,
    },

    d12: {
      id: 'd12',
      sides: 12,
    },

    d20: {
      id: 'd20',
      sides: 20,
    },

    d100: {
      id: 'd100',
      sides: 100,
    },
  };

  rolagemPericia(pericia: string) {
    let randomNumber = Math.floor(Math.random() * this.dados.d20.sides) + 1;
    let rolagem = randomNumber + this.AtributosService.pericias[pericia].atributo;
    let texto =
      'Dado natural: ' +
      randomNumber +
      '\nModificador: ' +
      this.AtributosService.pericias[pericia].atributo +
      '\nResultado: ' +
      rolagem;
    console.log(texto);
  }

}

import { Injectable } from '@angular/core';
import {AtributosService} from "./atributos.service";

@Injectable({
  providedIn: 'root'
})
export class AtaquesService {

  constructor(public AtributosService:AtributosService) { }

  ataques: any= [];

  adicionarAoObjeto(nome: string, atributo: string, bonusProficiencia: number, quantidadeDados: number, dadoDano: number, tipo: string, valorGrau: number) {
    let bonus;
    let modificadorDano = 0;

    if (atributo === this.AtributosService.atributos['forca'].id) {
      if(bonusProficiencia > 0){
        bonus = this.AtributosService.atributos['forca'].modificador + bonusProficiencia + this.AtributosService.personagem.nivel.atributo
      } else {
        bonus = this.AtributosService.atributos['forca'].modificador + bonusProficiencia
      }
      modificadorDano = this.AtributosService.atributos['forca'].modificador
    } else if (atributo === this.AtributosService.atributos['destreza'].id) {
      if(bonusProficiencia > 0) {
        bonus = this.AtributosService.atributos['destreza'].modificador + bonusProficiencia + this.AtributosService.personagem.nivel.atributo
      } else {
        bonus = this.AtributosService.atributos['forca'].modificador + bonusProficiencia
      }
      modificadorDano = this.AtributosService.atributos['destreza'].modificador
    } else if (atributo === this.AtributosService.atributos['inteligencia'].id) {
      if(bonusProficiencia > 0) {
        bonus = this.AtributosService.atributos['inteligencia'].modificador + bonusProficiencia + this.AtributosService.personagem.nivel.atributo
      } else {
        bonus = this.AtributosService.atributos['forca'].modificador + bonusProficiencia
      }
      modificadorDano = this.AtributosService.atributos['inteligencia'].modificador
    } else if (atributo === this.AtributosService.atributos['sabedoria'].id) {
      if(bonusProficiencia > 0) {
        bonus = this.AtributosService.atributos['sabedoria'].modificador + bonusProficiencia + this.AtributosService.personagem.nivel.atributo
      } else {
        bonus = this.AtributosService.atributos['forca'].modificador + bonusProficiencia
      }
      modificadorDano = this.AtributosService.atributos['sabedoria'].modificador
    } else if (atributo === this.AtributosService.atributos['carisma'].id) {
      if(bonusProficiencia > 0) {
        bonus = this.AtributosService.atributos['carisma'].modificador + bonusProficiencia + this.AtributosService.personagem.nivel.atributo
      } else {
        bonus = this.AtributosService.atributos['forca'].modificador + bonusProficiencia
      }
      modificadorDano = this.AtributosService.atributos['carisma'].modificador
    } else {
      bonus = bonusProficiencia
    }

    this.AtributosService.atualizar();

    this.ataques[nome] = {
      nome,
      atributo,
      bonus,
      modificadorDano,
      quantidadeDados,
      dadoDano,
      tipo,
      valorGrau
    };

    console.log(this.ataques)

    return bonus;
  }
}

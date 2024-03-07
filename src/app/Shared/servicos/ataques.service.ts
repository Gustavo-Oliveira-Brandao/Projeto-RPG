import { Injectable } from '@angular/core';
import {AtributosService} from "./atributos.service";

@Injectable({
  providedIn: 'root'
})
export class AtaquesService {

  constructor(public AtributosService:AtributosService) { }

  ataques: any= [];

  adicionarAoArray(nomeAtaque: string, danoAtaque: string, tipoAtaque: string, atributoAtaque: string, grauAtaque: string, qntdAcaoAtaque: string){
    let bonus;
    let modificadorDano = 0;
    let danoAtaqueChar = danoAtaque.split('d')
    let qntdDados = danoAtaqueChar[0]
    let dano = danoAtaqueChar[1]

    let bonusProficiencia = this.AtributosService.grauTreinamento(grauAtaque)

    if (atributoAtaque=== this.AtributosService.atributos['forca'].id) {
      if(grauAtaque !== 'destreinado'){
        bonus = this.AtributosService.atributos['forca'].modificador + bonusProficiencia + this.AtributosService.personagem.nivel.atributo
      } else {
        bonus = this.AtributosService.atributos['forca'].modificador + bonusProficiencia
      }
      modificadorDano = this.AtributosService.atributos['forca'].modificador
    } else if (atributoAtaque=== this.AtributosService.atributos['destreza'].id) {
      if(grauAtaque !== 'destreinado') {
        bonus = this.AtributosService.atributos['destreza'].modificador + bonusProficiencia + this.AtributosService.personagem.nivel.atributo
      } else {
        bonus = this.AtributosService.atributos['forca'].modificador + bonusProficiencia
      }
      modificadorDano = this.AtributosService.atributos['destreza'].modificador
    } else if (atributoAtaque=== this.AtributosService.atributos['inteligencia'].id) {
      if(grauAtaque !== 'destreinado') {
        bonus = this.AtributosService.atributos['inteligencia'].modificador + bonusProficiencia + this.AtributosService.personagem.nivel.atributo
      } else {
        bonus = this.AtributosService.atributos['forca'].modificador + bonusProficiencia
      }
      modificadorDano = this.AtributosService.atributos['inteligencia'].modificador
    } else if (atributoAtaque=== this.AtributosService.atributos['sabedoria'].id) {
      if(grauAtaque !== 'destreinado') {
        bonus = this.AtributosService.atributos['sabedoria'].modificador + bonusProficiencia + this.AtributosService.personagem.nivel.atributo
      } else {
        bonus = this.AtributosService.atributos['forca'].modificador + bonusProficiencia
      }
      modificadorDano = this.AtributosService.atributos['sabedoria'].modificador
    } else if (atributoAtaque=== this.AtributosService.atributos['carisma'].id) {
      if(grauAtaque !== 'destreinado') {
        bonus = this.AtributosService.atributos['carisma'].modificador + bonusProficiencia + this.AtributosService.personagem.nivel.atributo
      } else {
        bonus = this.AtributosService.atributos['forca'].modificador + bonusProficiencia
      }
      modificadorDano = this.AtributosService.atributos['carisma'].modificador
    } else {
      bonus = bonusProficiencia
    }

    let textoDano = qntdDados + "d" + dano + " " + tipoAtaque
    this.AtributosService.atualizar();

    let ataque = {
      id: nomeAtaque,
      bonus: bonus,
      qntdDados: qntdDados,
      dano: dano,
      tipoAtaque: tipoAtaque,
      textoDano: textoDano,
      atributoAtaque: atributoAtaque,
      grauAtaque: grauAtaque,
      qntdAcaoAtaque: qntdAcaoAtaque,
    }

    this.ataques.push(ataque)

    console.log(this.ataques[0])

    try{
      console.log(this.ataques[1])
    } catch(e){
      console.log("Nao tem segundo ataque")
    }

  }
}

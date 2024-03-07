import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProficienciaService {

  constructor() { }

  proficiencias: any= []

  criarProficiencia(nomeProficiencia: string, atributoProficiencia: string, tipoProficiencia: string){
    let proficiencia = {
      id: nomeProficiencia,
      atributo: atributoProficiencia,
      tipo: tipoProficiencia
    }
    this.proficiencias.push(proficiencia);
  }
}

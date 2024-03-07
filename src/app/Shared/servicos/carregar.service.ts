import { Injectable } from '@angular/core';
import {AtributosService} from "./atributos.service";
import {AtaquesService} from "./ataques.service";
import {InventarioService} from "./inventario.service";
import {ProficienciaService} from "./proficiencia.service";

@Injectable({
  providedIn: 'root'
})
export class CarregarService {

  constructor(protected AtributosService:AtributosService, protected AtaquesService:AtaquesService, protected InventarioService:InventarioService, protected ProficienciaService:ProficienciaService){}

    salvar() {
      localStorage.setItem('personagem', JSON.stringify(this.AtributosService.personagem));
      localStorage.setItem("atributos", JSON.stringify(this.AtributosService.atributos));
      localStorage.setItem("pericias", JSON.stringify(this.AtributosService.pericias));
      localStorage.setItem("ataques", JSON.stringify(this.AtaquesService.ataques))
      localStorage.setItem("inventario", JSON.stringify(this.InventarioService.inventario));
      localStorage.setItem("proficiencias", JSON.stringify(this.ProficienciaService.proficiencias))
    }
    carregar(){

      let personagem = localStorage.getItem('personagem');
      let atributos = localStorage.getItem('atributos');
      let pericias = localStorage.getItem('pericias');
      let ataques = localStorage.getItem('ataques');
      let inventario = localStorage.getItem('inventario');
      let proficiencia = localStorage.getItem('proficiencias');

      if(personagem === null || atributos === null || pericias === null || ataques === null || inventario === null || proficiencia === null){
        console.log('personagem não existe');
      } else{
        this.AtributosService.personagem = JSON.parse(personagem);
        this.AtributosService.atributos = JSON.parse(atributos);
        this.AtributosService.pericias = JSON.parse(pericias);
        this.AtaquesService.ataques = JSON.parse(ataques);
        this.InventarioService.inventario = JSON.parse(inventario);
        this.ProficienciaService.proficiencias = JSON.parse(proficiencia);
      }

      Object.keys(this.AtributosService.pericias).forEach((pericia)=>{

        let option = document.getElementById(pericia);

        if(this.AtributosService.pericias[pericia].grau === 'destreinado') {
          console.log('teste')
        }else{
          if(option instanceof HTMLSelectElement)
            option.value = this.AtributosService.pericias[pericia].grau
        }
        })
    }

}

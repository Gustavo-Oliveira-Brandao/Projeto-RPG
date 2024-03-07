import { Injectable } from '@angular/core';
import {AtributosService} from "./atributos.service";
import {AtaquesService} from "./ataques.service";

@Injectable({
  providedIn: 'root'
})
export class CarregarService {

  constructor(protected AtributosService:AtributosService, protected AtaquesService:AtaquesService){}

    salvar() {
      localStorage.setItem('personagem', JSON.stringify(this.AtributosService.personagem));
      localStorage.setItem("atributos", JSON.stringify(this.AtributosService.atributos));
      localStorage.setItem("pericias", JSON.stringify(this.AtributosService.pericias));
      localStorage.setItem("ataques", JSON.stringify(this.AtaquesService.ataques))
    }
    carregar(){

      let personagem = localStorage.getItem('personagem');
      let atributos = localStorage.getItem('atributos')
      let pericias = localStorage.getItem('pericias');

      if(personagem === null || atributos === null || pericias === null){
        console.log('personagem não existe');
      } else{
        this.AtributosService.personagem = JSON.parse(personagem);
        this.AtributosService.atributos = JSON.parse(atributos);
        this.AtributosService.pericias = JSON.parse(pericias);
      }

      Object.keys(this.AtributosService.pericias).forEach((pericia)=>{

        let option = document.getElementById(pericia);

        if(this.AtributosService.pericias[pericia].grau === 'destreinado') {
          console.log("deu ruim")
        }else{
          if(option instanceof HTMLSelectElement)
            option.value = this.AtributosService.pericias[pericia].grau
        }
        })
    }

}

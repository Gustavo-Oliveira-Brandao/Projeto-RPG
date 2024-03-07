import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor() { }

  inventario: any = []

  criarItem(nomeItem: string, pesoItem: string, descricaoItem: string, valorItem: string){

    let item = {
      id: nomeItem,
      peso: pesoItem,
      descricao: descricaoItem,
      valor: valorItem
    }
    this.inventario.push(item)

  }
}

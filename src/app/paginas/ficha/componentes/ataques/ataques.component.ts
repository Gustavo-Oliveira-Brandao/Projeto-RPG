import { Component } from '@angular/core';

@Component({
  selector: 'app-ataques',
  standalone: true,
  imports: [],
  templateUrl: './ataques.component.html',
  styleUrl: './ataques.component.css'
})
export class AtaquesComponent {

  ataques: Array<{
    nome: string;
    tipoAtributo: string;
    quantidadeDados: number;
    dadoDano: number;
  }> = Array(

  );

  adicionarAtaque(nome: string, tipoAtributo: string, quantidadeDados: number, dadoDano: number) {

  }


}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  raca = {
    id: 'raca',
    atributo: ''
  }

  classe = {
    id: 'classe',
    atributo: ''
  }

  origem = {
    id: 'origem',
    atributo: ''
  }

  nivel = {
    id: 'nivel',
    atributo: 1
  }

}

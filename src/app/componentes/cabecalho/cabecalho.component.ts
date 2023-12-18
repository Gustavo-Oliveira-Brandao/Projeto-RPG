import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  raca = {
    id: 'raca',
    valor: ''
  }

  classe = {
    id: 'classe',
    valor: ''
  }

  origem = {
    id: 'origem',
    valor: ''
  }

  nivel = {
    id: 'nivel',
    valor: 0
  }

  divindade = {
    id: 'divindade',
    valor: ''
  }

}

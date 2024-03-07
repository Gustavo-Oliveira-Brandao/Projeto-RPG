import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AtributosService} from "../servicos/atributos.service";

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  constructor(protected AtributosService:AtributosService) {
  }
}

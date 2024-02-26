import { AtributosService } from '../../../../Shared/servicos/atributos.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atributos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './atributos.component.html',
  styleUrl: './atributos.component.css',
})

export class AtributosComponent {
  constructor(public AtributosService:AtributosService){}
}

import { AtributosService } from '../../../../Shared/servicos/atributos.service';
import { Component } from '@angular/core';
import {RolagensService} from "../../../../Shared/servicos/rolagens.service";

@Component({
  selector: 'app-pericias',
  standalone: true,
  imports: [],
  templateUrl: './pericias.component.html',
  styleUrl: './pericias.component.css'
})
export class PericiasComponent {
  constructor(public AtributosService:AtributosService, protected RolagensService:RolagensService){}
}

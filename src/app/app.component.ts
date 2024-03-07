import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './Shared/cabecalho/cabecalho.component';
import { FichaComponent } from './paginas/ficha/ficha.component';
import { HabilidadesComponent } from './paginas/habilidades/habilidades.component';
import { MagiasComponent } from './paginas/magias/magias.component';
import { PetsComponent } from './paginas/pets/pets.component';
import { FormsModule } from '@angular/forms';
import {AtributosService} from "./Shared/servicos/atributos.service";
import {CarregarService} from "./Shared/servicos/carregar.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CabecalhoComponent,
    FichaComponent,
    HabilidadesComponent,
    MagiasComponent,
    PetsComponent,
    FormsModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(protected AtributoService:AtributosService, protected CarregarService:CarregarService) {}

  title = 'ficha-de-rpg';
}


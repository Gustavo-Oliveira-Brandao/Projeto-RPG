import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../../Shared/cabecalho/cabecalho.component';
import { StatusJogadorComponent } from './componentes/status-jogador/status-jogador.component';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { PericiasComponent } from './componentes/pericias/pericias.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { AcoesComponent } from './componentes/acoes/acoes.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {InfoPersonagemComponent} from "./componentes/info-personagem/info-personagem.component";

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [
    FormsModule,
    CabecalhoComponent,
    InfoPersonagemComponent,
    AtributosComponent,
    PericiasComponent,
    StatusJogadorComponent,
    InventarioComponent,
    AcoesComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css',
})
export class FichaComponent {

}


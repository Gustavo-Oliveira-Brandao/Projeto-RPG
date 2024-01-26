import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { FichaComponent } from './componentes/ficha/ficha.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { FormsModule } from '@angular/forms';
import { MagiasComponent } from './componentes/magias/magias.component';
import { PetsComponent } from './componentes/pets/pets.component';

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
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ficha-de-rpg';
}


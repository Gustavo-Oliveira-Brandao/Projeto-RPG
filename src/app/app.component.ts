import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { FichaComponent } from './componentes/ficha/ficha.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ClasseComponent } from './componentes/classe/classe.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CabecalhoComponent,
    FichaComponent,
    HabilidadesComponent,
    ClasseComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ficha-de-rpg';
}

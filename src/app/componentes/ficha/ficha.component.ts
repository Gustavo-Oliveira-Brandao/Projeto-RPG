import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css'
})
export class FichaComponent {
  forca = {
    id:'forca',
    atributo: 10,
  }
  destreza = {
    id:'destreza',
    atributo: 10
  }
  constituicao = {
    id:'constituicao',
    atributo: 10
  }
  inteligencia = {
    id:'inteligencia',
    atributo: 10
  }
  sabedoria = {
    id:'sabedoria',
    atributo: 10
  }
  carisma = {
    id:'carisma',
    atributo: 10
  }
  atualizarAtributos(){
  }
  modificadorForca(){
  }
}

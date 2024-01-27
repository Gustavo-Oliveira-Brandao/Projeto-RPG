import { Component } from '@angular/core';
import { FichaComponent } from '../ficha/ficha.component';
import { BehaviorSubject } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-tabelas',
  standalone: true,
  imports: [FichaComponent],
  templateUrl: './tabelas.component.html',
  styleUrl: './tabelas.component.css',
})

export class TabelasComponent {

}

export interface Inventario{
  id: 0;
  nome: '';
  descricao: '';
  peso: 0;
}

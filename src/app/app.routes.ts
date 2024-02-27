import { RouterModule, Routes } from '@angular/router';
import { FichaComponent } from './paginas/ficha/ficha.component';
import { HabilidadesComponent } from './paginas/habilidades/habilidades.component';
import { MagiasComponent } from './paginas/magias/magias.component';
import { PetsComponent } from './paginas/pets/pets.component';
import { NgModule } from '@angular/core';
import {PericiasComponent} from "./paginas/ficha/componentes/pericias/pericias.component";
import {InventarioComponent} from "./paginas/ficha/componentes/inventario/inventario.component";
import {AcoesComponent} from "./paginas/ficha/componentes/acoes/acoes.component";

export const routes: Routes = [
  { path: '', redirectTo: '/ficha', pathMatch: 'full' },
  { path: 'ficha', component: FichaComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'magias', component: MagiasComponent },
  { path: 'pets', component: PetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {}

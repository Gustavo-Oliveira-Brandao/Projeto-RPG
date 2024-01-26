import { RouterModule, Routes } from '@angular/router';
import { FichaComponent } from './componentes/ficha/ficha.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { MagiasComponent } from './componentes/magias/magias.component';
import { PetsComponent } from './componentes/pets/pets.component';
import { NgModule } from '@angular/core';

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

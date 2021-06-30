import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadoresCoincidentesComponent } from './jugadores-coincidentes/jugadores-coincidentes.component';
import { ListaJugadoresComponent } from './lista-jugadores/lista-jugadores.component';

const routes: Routes = [
  { path: '',redirectTo: '/jugadores', pathMatch: 'full'},
  {path:'jugadores', component:ListaJugadoresComponent},
  {path:'coincidentes', component:JugadoresCoincidentesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

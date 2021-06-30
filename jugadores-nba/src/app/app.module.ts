import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaJugadoresComponent } from './lista-jugadores/lista-jugadores.component';
import { JugadoresCoincidentesComponent } from './jugadores-coincidentes/jugadores-coincidentes.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaJugadores } from './services/lista-jugadores.service';
import { MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaJugadoresComponent,
    JugadoresCoincidentesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [ListaJugadores],
  bootstrap: [AppComponent]
})
export class AppModule { }

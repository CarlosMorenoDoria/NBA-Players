import { Component, OnInit } from '@angular/core';
import { ListaJugadores } from '../services/lista-jugadores.service';


let ELEMENT_DATA: any[] = [];
@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent implements OnInit {
  listaJugadores: any;  
  displayedColumns: string[] = ['first_name', 'last_name', 'h_in', 'h_meters'];
  dataSource = ELEMENT_DATA;
  detalleJugadorBool: boolean = false;
  detalleJugador: any;
  sameInchesPlayers: any[]=[];

  constructor(private jugadoresService:ListaJugadores) { }

  ngOnInit(): void {
    this.getJugadores();
  }
  async getJugadores() {
    const resp = await this.jugadoresService.getJugadores();
    ELEMENT_DATA= resp.values;
    this.dataSource = ELEMENT_DATA
    
  }
  selectedPlayer(element:any){
    this.detalleJugadorBool = true;
    this.detalleJugador = element;
    this.sameInchesPlayers=ELEMENT_DATA.filter((item)=>
      item.h_in === element.h_in
    );
    console.log("SAME INCHES PLAYERS= ",this.sameInchesPlayers)
  }

}





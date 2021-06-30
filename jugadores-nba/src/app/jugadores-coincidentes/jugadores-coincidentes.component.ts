import { Component, OnInit } from '@angular/core';
import { ListaJugadores } from '../services/lista-jugadores.service';

@Component({
  selector: 'app-jugadores-coincidentes',
  templateUrl: './jugadores-coincidentes.component.html',
  styleUrls: ['./jugadores-coincidentes.component.css']
})
export class JugadoresCoincidentesComponent implements OnInit {
  inch:any;
  players:any[]=[];
  sumOfPlayers:any[]=[];
  pairs: any[]=[];
  constructor(private jugadoresService:ListaJugadores) { }

  ngOnInit(): void {
    this.getJugadores();
  }
  async getJugadores() {
    const resp = await this.jugadoresService.getJugadores();
    this.players = resp.values;
    // console.log("Players= ",this.players);
  }
  searchPairs(){
    this.pairs=[];
    this.inch= parseInt(this.inch);
    let elementInch, hash = Object.create(null);
    for (let i = 0; i < this.players.length; i++) {
        elementInch = parseInt(this.players[i].h_in);
        const nameOne= this.players[i].first_name;
        const nameTwo= i===this.players.length-1 ? this.players[i].first_name:this.players[i+1]?.first_name;
        if (hash[this.inch - elementInch]) {
            this.pairs.push([nameOne,this.inch - elementInch, nameTwo,elementInch]);
        }
        if (!hash[elementInch]) {
            hash[elementInch] = true;
        }
    }
    console.log("Result =", this.pairs);

  }
  

}

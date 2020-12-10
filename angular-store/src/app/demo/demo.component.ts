import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'angular-store';
  description = 'For Harry Potter fans';
  casita = '';
  casas: Array<string> = ['Hufflepuff', 'Gryffindor', 'Ravenclaw', 'Slytherin'];
  palabras = 'hola hola hola hola hola no';
  constructor() { }

  ngOnInit(): void {
    this.repetidos(this.palabras);
  }

  addHouses( nombre: string): void {
    this.casas.push(nombre);
  }

  deleteHouse(i: number): void {
    this.casas.splice(i, 1 );
  }

  mayor(numeros: number[]): void{
    numeros.reduce((aux, value) =>{
      if(value > aux){
        aux = value;
      }
      return aux;
    });
  }

  repetidos(palabras: string): void{
    const mapa = new Map();
    palabras.split(' ').forEach(value => {
      if (mapa.has(value)){
        mapa.set(value , mapa.get(value) + 1);
      }
      else{
        mapa.set(value, 1);
      }
    });
    console.log(mapa);
  }
}

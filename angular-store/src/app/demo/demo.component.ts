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
  constructor() { }

  ngOnInit(): void {
  }

  addHouses( nombre: string): void {
    this.casas.push(nombre);
  }

  deleteHouse(i: number): void {
    this.casas.splice(i, 1 );
  }
}

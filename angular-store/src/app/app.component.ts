import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-store';
  description = 'For Harry Potter fans';
  casita = '';
  casas: Array<string> = ['Hufflepuff', 'Griffindor', 'Ravenclaw', 'Slythering'];

  addHouses( nombre: string): void {
    this.casas.push(nombre);
  }

  deleteHouse(i: number): void {
    this.casas.splice(i, 1 );
  }
}

import { Component } from '@angular/core';

import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-store';
  description = 'For Harry Potter fans';
  casita = '';
  casas: Array<string> = ['Hufflepuff', 'Gryffindor', 'Ravenclaw', 'Slytherin'];
  products: Product[] = [
    {
      title: 'Goblet of Fire book',
      price: '1000',
      image: 'assets/images/gfbook.jpg',
      description: ',vlf'
    },
    {
      title: 'Hogwarts hoodie',
      price: '2000',
      image: 'assets/images/hoodie.jpg',
      description: ',vlf'
    },
    {
      title: 'Hufflepuff mask',
      price: '2500',
      image: 'assets/images/huffmask.jpg',
      description: ',vlf'
    },
    {
      title: 'Acceptance letter',
      price: '4500',
      image: 'assets/images/letter.jpg',
      description: ',vlf'
    }
  ];

  addHouses( nombre: string): void {
    this.casas.push(nombre);
  }

  deleteHouse(i: number): void {
    this.casas.splice(i, 1 );
  }

  itemHandler(title: string): void {
    console.log(`en el carrito se agrega ${title}`);
  }
}

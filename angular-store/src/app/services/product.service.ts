import { Injectable } from '@angular/core';
import {Product} from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      id: '1',
      title: 'Goblet of Fire book',
      price: 1000,
      image: 'assets/images/gfbook.png',
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      title: 'Hogwarts hoodie',
      price: 2000,
      image: 'assets/images/hoodie.png',
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      title: 'Hogwarts hoodie',
      price: 2000,
      image: 'assets/images/hoodie.png',
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      title: 'Hogwarts hoodie',
      price: 2000,
      image: 'assets/images/hoodie.png',
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      title: 'Hogwarts hoodie',
      price: 2000,
      image: 'assets/images/hoodie.png',
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      title: 'Hogwarts hoodie',
      price: 6000,
      image: 'assets/images/hoodie.png',
      description: 'bla bla bla bla bla'
    },
    {
      id: '7',
      title: 'Hufflepuff mask',
      price: 2500,
      image: 'assets/images/huffmask.png',
      description: 'bla bla bla bla bla'
    },
    {
      id: '8',
      title: 'Acceptance letter',
      price: 4500,
      image: 'assets/images/letter.png',
      description: 'bla bla bla bla bla'
    }
  ];
  constructor() { }

  getAllProducts(): Product[]{
    return this.products;
  }

  getProductByID(id: string): Product{
    return this.products.find(value => id === value.id);
  }
}

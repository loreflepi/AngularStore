import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      title: 'Goblet of Fire book',
      price: 1000,
      image: 'assets/images/gfbook.png',
      description: 'bla bla bla bla bla'
    },
    {
      title: 'Hogwarts hoodie',
      price: 2000,
      image: 'assets/images/hoodie.png',
      description: 'bla bla bla bla bla'
    },
    {
      title: 'Hogwarts hoodie',
      price: 2000,
      image: 'assets/images/hoodie.png',
      description: 'bla bla bla bla bla'
    },
    {
      title: 'Hogwarts hoodie',
      price: 2000,
      image: 'assets/images/hoodie.png',
      description: 'bla bla bla bla bla'
    },
    {
      title: 'Hogwarts hoodie',
      price: 2000,
      image: 'assets/images/hoodie.png',
      description: 'bla bla bla bla bla'
    },
    {
      title: 'Hogwarts hoodie',
      price: 6000,
      image: 'assets/images/hoodie.png',
      description: 'bla bla bla bla bla'
    },
    {
      title: 'Hufflepuff mask',
      price: 2500,
      image: 'assets/images/huffmask.png',
      description: 'bla bla bla bla bla'
    },
    {
      title: 'Acceptance letter',
      price: 4500,
      image: 'assets/images/letter.png',
      description: 'bla bla bla bla bla'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.deleteDuplicates();
  }

  deleteDuplicates(): void{
    const auxProduct: Set<string> = new Set();
    this.products = this.products.filter(value => {
      if (auxProduct.has(JSON.stringify(value))){
        return false;
      }
      auxProduct.add(JSON.stringify(value));
      return true;
    });
  }

  itemHandler(title: string): void {
    console.log(`en el carrito se agrega ${title}`);
  }

  deleteItem(i: number): void{
    this.products.splice(i, 1);
  }

}

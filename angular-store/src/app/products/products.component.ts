import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private servicio: ProductService
  ) {  }

  ngOnInit(): void {
    this.products = this.servicio.getAllProducts();
    this.deleteDuplicates();
  }

  deleteDuplicates(): void{
    const auxProduct: Set<string> = new Set();
    this.products = this.products.filter(value => {
      if (auxProduct.has(value.title)){
        return false;
      }
      auxProduct.add((value.title));
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

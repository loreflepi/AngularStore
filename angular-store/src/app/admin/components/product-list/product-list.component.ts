import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../modules/core/services/product.service';
import {Product} from '../../../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getproducts();
  }

  getproducts(): void{
    this.productService.getAllProducts().subscribe(value => this.products = value);
  }

  deleteProduct(id: number, index: number): void{
    this.productService.deleteProduct(id).subscribe(value => this.products = this.products.filter(value1 => value1.id !== id));
  }

}

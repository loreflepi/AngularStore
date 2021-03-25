import { Injectable } from '@angular/core';
import {Product} from '../../../product.model';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products2: Product[] = [
    {
      id: 1,
      title: 'Goblet of Fire book',
      price: 1000,
      image: 'assets/images/gfbook.png',
      description: 'bla bla bla bla bla'
    },
    {
      id: 2,
      title: 'Hogwarts hoodie',
      price: 2000,
      image: 'assets/images/hoodie.png',
      description: 'bla bla bla bla bla'
    },
    {
      id: 3,
      title: 'Hogwarts hoodie',
      price: 2000,
      image: 'assets/images/hoodie.png',
      description: 'bla bla bla bla bla'
    },
    {
      id: 4,
      title: 'Hogwarts hoodie',
      price: 2000,
      image: 'assets/images/hoodie.png',
      description: 'bla bla bla bla bla'
    },
    {
      id: 5,
      title: 'Hogwarts hoodie',
      price: 2000,
      image: 'assets/images/hoodie.png',
      description: 'bla bla bla bla bla'
    },
    {
      id: 6,
      title: 'Hogwarts hoodie',
      price: 6000,
      image: 'assets/images/hoodie.png',
      description: 'bla bla bla bla bla'
    },
    {
      id: 7,
      title: 'Hufflepuff mask',
      price: 2500,
      image: 'assets/images/huffmask.png',
      description: 'bla bla bla bla bla'
    },
    {
      id: 8,
      title: 'Acceptance letter',
      price: 4500,
      image: 'assets/images/letter.png',
      description: 'bla bla bla bla bla'
    }
  ];
  constructor(
    private http: HttpClient
  ) {  }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.url_api}/products/`);
    // this.products;
  }

  getProductByID(id: number): Observable<Product>{
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
    // this.products.find(value => id === value.id);
  }

  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${environment.url_api}/products/`, product);
  }

  updateProduct(id: number, changes: Partial<Product>): Observable<Product>{
    return this.http.put<Product>(`${environment.url_api}/products/`, changes);
  }

  deleteProduct(id: number): Observable<Product>{
    return this.http.delete<Product>(`${environment.url_api}/products/${id}`);
  }
}

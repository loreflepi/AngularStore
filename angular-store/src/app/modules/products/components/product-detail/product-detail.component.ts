import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import {Product} from '../../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  producto: Product;
  constructor(
    private route: ActivatedRoute,
    private servicio: ProductService
  ) {  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      const id = param.id;
      this.producto = this.servicio.getProductByID(id);
    });
  }

}

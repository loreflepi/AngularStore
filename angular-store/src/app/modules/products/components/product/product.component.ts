import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from '../../../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit, OnDestroy{
  @Input() product: Product;
  @Output() itemAdded: EventEmitter<any> = new EventEmitter<any>();

  constructor(){
    console.log('constructor');
  }

  // tslint:disable-next-line:typedef
  ngOnChanges(cambios: SimpleChanges){
    console.log(cambios);
    const cambio = cambios.product;
    if (cambio.firstChange){
      this.product.price = this.product.price * 0.9;
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    console.log('Init');
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy(){
    console.log('destroy');
  }

  addItem(): void{
    console.log('Se agrego al carrito');
    this.itemAdded.emit(this.product.title);
  }
}

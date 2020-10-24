import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent{
  @Input() product: Product;
  @Output() itemAdded: EventEmitter<any> = new EventEmitter<any>();

  addItem(): void{
    console.log('Se agrego al carrito');
    this.itemAdded.emit(this.product.title);
  }
}

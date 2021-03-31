import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.scss']
})
export class FormProductsComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(): void{
    this.formGroup = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

}

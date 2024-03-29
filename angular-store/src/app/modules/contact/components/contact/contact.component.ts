import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('', [Validators.email, Validators.required]);
    this.emailField.valueChanges.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}

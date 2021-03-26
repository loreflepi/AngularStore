import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import {MaterialModule} from '../material/material.module';




@NgModule({
  declarations: [
    ContactComponent
  ],
  exports: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ContactModule { }

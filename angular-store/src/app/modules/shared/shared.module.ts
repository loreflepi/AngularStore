import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { DemoComponent } from '../shared/components/demo/demo.component';
import { NotfoundComponent } from '../shared/components/notfound/notfound.component';
import { WordsPipe } from '../shared/pipes/words.pipe';
import { MaterialModule } from '../material/material.module';
import { WordLimitPipe } from './pipes/word-limit.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DemoComponent,
    NotfoundComponent,
    WordsPipe,
    WordLimitPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DemoComponent,
    NotfoundComponent,
    WordsPipe,
    ReactiveFormsModule,
    WordLimitPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

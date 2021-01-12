import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { DemoComponent } from '../shared/components/demo/demo.component';
import { NotfoundComponent } from '../shared/components/notfound/notfound.component';
import { WordsPipe } from '../shared/pipes/words.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DemoComponent,
    NotfoundComponent,
    WordsPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DemoComponent,
    NotfoundComponent,
    WordsPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }

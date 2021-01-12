import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeRoutingModule} from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule,
    ProductsModule
  ]
})

export class HomeModule{

}

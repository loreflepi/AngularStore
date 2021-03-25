import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MaterialModule } from '../modules/material/material.module';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { TableAdminComponent } from './components/table-admin/table-admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';



@NgModule({
  declarations: [ProductFormComponent, NavAdminComponent, TableAdminComponent, DashboardComponent, ProductListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }

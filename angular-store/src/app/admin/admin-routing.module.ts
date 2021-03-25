import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { TableAdminComponent } from './components/table-admin/table-admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {ProductListComponent} from './components/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: NavAdminComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'table',
        component: TableAdminComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

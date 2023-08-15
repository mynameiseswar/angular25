import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path:'list',
        component: ProductListComponent
      },
      {
        path: 'details/:productId',
        component: ProductDetailsComponent,
        canDeactivate:[(componet: ProductDetailsComponent) => !componet.hasUnSavedChanges]
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

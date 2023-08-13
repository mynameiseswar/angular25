import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from '../product.service';



@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers:[
    ProductService
  ]
})
export class ProductModule { }

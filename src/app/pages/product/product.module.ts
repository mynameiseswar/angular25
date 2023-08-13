import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    FormsModule,
    TooltipModule.forRoot(),
    RatingModule.forRoot()
  ]
})
export class ProductModule { }

import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  selectedProduct: string = ''

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ){

    // this.selectedProduct = this.productService.getSelectedProduct();

    this.activatedRoute.queryParams.subscribe(
      (queryParams) =>{
        console.log(queryParams);
      }
    );

    this.activatedRoute.params.subscribe(
    (params: any) =>{
      console.log(params);

      this.selectedProduct = params['productId']|| '';
    }
    );
  }

}

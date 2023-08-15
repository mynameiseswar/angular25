import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsService } from './product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers:[ProductDetailsService]
})
export class ProductDetailsComponent {

  productId: number = 0;
  productDetails: any;

  objectKeysList: any =[];
  hasUnSavedChanges = false;

  constructor(
    private productDetailsService: ProductDetailsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){

      this.activatedRoute.params.subscribe(
      (params: any) =>{
        this.productId = params.productId;

        this.productDetailsService.getProductDetails(this.productId).subscribe(
          (productDetails: any) =>{
            if(productDetails !== null){
            this.productDetails = productDetails;
            this.objectKeysList = Object.keys(this.productDetails);
            }else{
              this.router.navigate(['/product/list'])
            }
          }
        );
      }
      );
  }

}

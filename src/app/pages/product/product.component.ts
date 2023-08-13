import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {


  productList = [
    1,2,3,4,5,6
  ]


  constructor(
    private productService: ProductService,
    private router: Router
  ){}


  selectProduct(target: any){
    this.productService.setSelectedProduct(target);
    this.router.navigate([`product/details/${target}`],{ queryParams: { sort: 'DESC', user: 'admin' }});
  }



}

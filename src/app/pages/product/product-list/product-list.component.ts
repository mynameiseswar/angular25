import { Component } from '@angular/core';
import { ProductListService, ProudctItem } from './product-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductListService]
})
export class ProductListComponent {

  productList: Array<ProudctItem> = [];
  allProductList: Array<ProudctItem> = [];
  categoriesList: any = [];
  constructor(
    private productListService: ProductListService,
    private router:Router
  ){
    this.productListService.getALLCategories().subscribe(
      (cat: any) =>{
        if(cat){
          this.categoriesList = cat;
        }
      }
    );
    this.productListService.getAllProducts().subscribe(
      (productList: Array<ProudctItem> | any) =>{
        this.productList = productList;
        this.allProductList = productList;
      }
    );
  }



  navigateToDetailsPage(product: ProudctItem){
    this.router.navigate([`/product/details/${product.id}`])
  }

  filterByCategories(targetCat: string){
    let filterObject  = this.allProductList.filter(
      (product: any) =>{
         return product.category == targetCat
      }
    );
    this.productList = filterObject;
  }
  showAllProducts(){
    // this.productList = JSON.parse(JSON.stringify(this.allProductList));
    this.productList = this.allProductList;
  }

}







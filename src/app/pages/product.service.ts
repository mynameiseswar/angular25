import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private selectedProduct:string ='';

  constructor() { }


  setSelectedProduct(product: any){
    this.selectedProduct =  product;
  }

  getSelectedProduct(){
    return this.selectedProduct;
  }
}

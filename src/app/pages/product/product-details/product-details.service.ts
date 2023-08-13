import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getProductDetails(productId: number){
    return this.httpClient.get(`${environment.API_END_POINT}/products/${productId}`)
  }

}

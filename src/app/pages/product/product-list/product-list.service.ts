import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface ProudctItem{
  category: string; 
  description: string
  id: number
  image:string;
  price: number
  rating: {rate: number, count: number}
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductListService {


  constructor(
    private httpClient: HttpClient
  ) { }


  getAllProducts(){
    return this.httpClient.get(`${environment.API_END_POINT}/products`);
  }

  getALLCategories(){
    return this.httpClient.get(`${environment.API_END_POINT}/products/categories`)
  }
}

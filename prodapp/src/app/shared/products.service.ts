import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'http://localhost:7000/api/products';

  constructor(private httpClient: HttpClient) { }
  
  getProducts(): Observable<any> { 
    return this.httpClient.get(this.url);
  } 
 
 get(productId) {
    return this.httpClient.get(this.url + `/${productId}`);
  }

  delete(productId) {
    const deleteUrl = this.url + `/${productId}`;
    return this.httpClient.delete(deleteUrl);
  }
  
  create(product: Product):Observable<any> {    
    return this.httpClient.post<Product>(this.url, product);
  }
  
  getMockProducts(): Product[]{ 
 return [
  new Product(11,"Laptops",'Dell laptop',2,20000,'https://via.placeholder.com/150/000000/FFFFFF/?text=DELL laptop'),
  new Product(22,'Desktops','Micromax desktop',4,5000,'https://via.placeholder.com/150/000000/FFFFFF/?text=Samsung Desktop')
  ]
 }
}

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
  
 //constructor() { }
  
  getMockProducts(): Product[]{ 
 return [
  new Product(11,"Laptops",'Dell laptop',2,20000,'link'),
  new Product(22,'Desktops','Micromax desktop',4,5000,'link2')
  ]
 }
}

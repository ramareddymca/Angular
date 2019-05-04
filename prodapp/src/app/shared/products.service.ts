import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  
  getProducts(): Product[]{ 
 return [
  new Product(11,'Laptops','Dell laptop',2,20000,'link'),
  new Product(22,'Desktops','Micromax desktop',4,5000,'link2')
]
 }
}

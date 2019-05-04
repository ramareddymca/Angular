import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {

 products: Product[];

  constructor(private productsService:ProductsService) { }

  ngOnInit() {
   // this.products = this.getMockProducts();
   this.products = this.productsService.getProducts();
  }
  
 getMockProducts(){ 
 return [
  new Product(1,'Laptop','Dell laptop',2,20000,'link'),
  new Product(2,'Desktop','Micromax desktop',4,5000,'link2')
]
 }
}

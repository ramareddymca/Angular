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
   this.getProducts();
  
  // from side component class
   // this.products = this.getMockProducts(); 
    // from service class
    //this.products = this.productsService.getMockProducts();    
  }
  
 getProducts() {
    this.productsService.getProducts().subscribe(
      (data) => {
        this.products = data as Product[];
        console.log("---> " + JSON.stringify(data));
      }
    )
  }
  
onDeleted(productId: number) {
    this.productsService.delete(productId)
      .subscribe(
        (data) => this.getProducts()
      );
  }
  
 getMockProducts(){ 
 return [
  new Product(1,'Laptop','Dell laptop',2,20000,'link'),
  new Product(2,'Desktop','Micromax desktop',4,5000,'link2')
]
 }
}

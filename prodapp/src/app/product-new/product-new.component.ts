import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductsService } from '../shared/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent implements OnInit {

    product = Product;
  

   constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    //this.product = new Product(null, null, null, null, null);
  }
  
 private onSubmit() {
   // this.product.id = Math.floor(Math.random() * (1000)); // My server doesn't generate id
    console.table(this.product);
    this.productsService.create(this.product)
      .subscribe(product => {
        alert('Product Saved Successfully');
        this.router.navigate(['']);
      }
      );
  }

  private cancelAddProduct() {
   alert('Clicked Cancel button'); 
    this.router.navigate(['']);
  }

}

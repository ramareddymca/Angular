import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductsService } from '../shared/products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  productId: string;

  @ViewChild('productForm') form: any;

constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) {

    this.productId = this.route.snapshot.paramMap.get('id');
    this.product = new Product(null, null, null, null, null);
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productsService.get(this.productId).subscribe(
      (data) => this.product = data as Product
    )
  }
  
  private onSubmit() {
    console.table(this.product);
    this.productsService.update(this.product)
      .subscribe(product => {
        alert('Product updated Successfully');
      }
      );
  }
  
  private cancelAddProduct() {
    this.router.navigate(['']);
  }

}

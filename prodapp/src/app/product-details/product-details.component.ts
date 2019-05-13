import { Component, OnInit } from '@angular/core';
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
  
  private cancelAddProduct() {
    this.router.navigate(['']);
  }

}

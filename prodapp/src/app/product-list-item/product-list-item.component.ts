import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input() product: Product;
  @Output() deleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  
  onDelete() {
    if (confirm(`Are you sure you want to delete ${this.product.name}`)) {
      this.deleted.emit(this.product.id);
    }
  }

}

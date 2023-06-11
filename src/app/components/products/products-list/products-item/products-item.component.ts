import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../models/product.model";
import {ActionEvent} from "../../../../models/actionEvent";
import {ProductActionsTypes} from "../../../../enums/productActionsTypes";

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit{

  @Input() product!: Product;
  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor() {}

  ngOnInit(): void {}

  onCheckedProduct(product: Product) {
    this.productEventEmitter.emit({
      type: ProductActionsTypes.CHECKED_PRODUCT,
      payload: product
    });
  }

  onSelectedProduct(product: Product) {
    this.productEventEmitter.emit({
      type: ProductActionsTypes.SELECTED_PRODUCT,
      payload: product
    });
  }

  onAvailableProduct(product: Product) {
    this.productEventEmitter.emit({
      type: ProductActionsTypes.AVAILABLE_PRODUCT,
      payload: product
    });
  }

  onDeleteProduct(product: Product) {
    this.productEventEmitter.emit({
      type: ProductActionsTypes.DELETE_PRODUCT,
      payload: product
    });
  }

  onEditProduct(product: Product) {
    this.productEventEmitter.emit({
      type: ProductActionsTypes.EDIT_PRODUCT,
      payload: product
    });
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent} from "../../../models/actionEvent";
import {ProductActionsTypes} from "../../../enums/productActionsTypes";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit{

  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor() {}

  ngOnInit(): void {}

  onGetAllProducts() {
    this.productEventEmitter.emit({
      type: ProductActionsTypes.GET_ALL_PRODUCTS
    });
  }

  onGetSelectedProducts() {
    this.productEventEmitter.emit({
      type: ProductActionsTypes.GET_SELECTED_PRODUCTS
    });
  }

  onGetAvailableProducts() {
    this.productEventEmitter.emit({
      type: ProductActionsTypes.GET_AVAILABLE_PRODUCTS
    });
  }

  onSearchProduct(dataForm: any) {
    this.productEventEmitter.emit({
      type: ProductActionsTypes.SEARCH_PRODUCTS,
      payload: dataForm
    });
  }

  onAddProducts() {
    this.productEventEmitter.emit({
      type: ProductActionsTypes.ADD_PRODUCTS
    });
  }
}

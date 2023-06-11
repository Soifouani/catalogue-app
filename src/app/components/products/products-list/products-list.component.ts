import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {State} from "../../../models/state";
import {StateEnum} from "../../../enums/stateEnum";
import {Product} from "../../../models/product.model";
import {ActionEvent} from "../../../models/actionEvent";
import {ProductActionsTypes} from "../../../enums/productActionsTypes";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
  @Input() products : Observable<State<Product[]>> | null = null;
  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();
  readonly StateEnum = StateEnum;

  constructor() {}

  ngOnInit(): void {
  }

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

  onActionEvent($event: ActionEvent) {
    this.productEventEmitter.emit($event);
  }
}

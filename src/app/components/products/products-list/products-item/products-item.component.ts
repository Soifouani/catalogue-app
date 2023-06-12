import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../models/product.model";
import {ProductActionsTypes} from "../../../../enums/productActionsTypes";
import {EventDriverService} from "../../../../services/event-driver.service";

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit{

  @Input() product!: Product;

  constructor(private eventDriverService: EventDriverService) {}

  ngOnInit(): void {}

  onCheckedProduct(product: Product) {
    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.CHECKED_PRODUCT,
      payload: product
    });
  }

  onSelectedProduct(product: Product) {
    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.SELECTED_PRODUCT,
      payload: product
    });
  }

  onAvailableProduct(product: Product) {
    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.AVAILABLE_PRODUCT,
      payload: product
    });
  }

  onDeleteProduct(product: Product) {
    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.DELETE_PRODUCT,
      payload: product
    });
  }

  onEditProduct(product: Product) {
    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.EDIT_PRODUCT,
      payload: product
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {ProductActionsTypes} from "../../../enums/productActionsTypes";
import {EventDriverService} from "../../../services/event-driver.service";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit{

  constructor(private eventDriverService: EventDriverService) {}

  ngOnInit(): void {}

  onGetAllProducts() {
    this.eventDriverService.publishEvent({
       type: ProductActionsTypes.GET_ALL_PRODUCTS
    });
  }

  onGetSelectedProducts() {
    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.GET_SELECTED_PRODUCTS
    });
  }

  onGetAvailableProducts() {
    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.GET_AVAILABLE_PRODUCTS
    });
  }

  onSearchProduct(dataForm: any) {
    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.SEARCH_PRODUCTS,
      payload: dataForm
    });
  }

  onAddProducts() {
    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.ADD_PRODUCTS
    });
  }
}

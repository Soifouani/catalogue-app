import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {
  GetAllProductsAction,
  GetAvailableProductsAction,
  GetSelectedProductsAction, ProductActionsTypes,
  SearchProductsAction
} from "../../../ngrx/products.actions";
import {Product} from "../../../models/product.model";
import {Router} from "@angular/router";
import {ProductsState} from "../../../ngrx/products.reducers";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit{

  state: ProductsState | null = null;
  readonly ProductActionsType = ProductActionsTypes;

  constructor(
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.state = state.catalogueState;
    })
  }

  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}));
  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsAction({}));
  }

  onGetAvailableProducts() {
    this.store.dispatch(new GetAvailableProductsAction({}));
  }

  onSearchProduct(dataForm: any) {
    this.store.dispatch(new SearchProductsAction(dataForm.keyword));
  }

  onEditProduct(product: Product) {
    this.router.navigateByUrl("/edit-product/" + product.id);
  }

  onAddProduct() {
    this.router.navigateByUrl("/add-product");
  }
}

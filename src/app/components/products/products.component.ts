import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product.model";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {StateEnum} from "../../enums/stateEnum";
import {State} from "../../models/state";
import {Router} from "@angular/router";
import {ProductActionsTypes} from "../../enums/productActionsTypes";
import {ActionEvent} from "../../models/actionEvent";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products : Observable<State<Product[]>> | null = null;
  readonly StateEnum = StateEnum;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onGetAllProducts();
  }

  onCheckedProduct(product: Product) {
    this.productService.checkProduct(product)
      .subscribe({
        next: updateProduct => {
          product.checked = updateProduct.checked
        },
        error: err => {
          console.log(err)
        }
      })
  }

  onSelectedProduct(product: Product) {
    this.productService.selectedProduct(product)
      .subscribe({
        next: updateProduct => {
          product.selected = updateProduct.selected
        },
        error: err => {
          console.log(err)
        }
      })
  }

  onAvailableProduct(product: Product) {
    this.productService.availableProduct(product)
      .subscribe({
        next: updateProduct => {
          product.available = updateProduct.available
        },
        error: err => {
          console.log(err)
        }
      })
  }

  onDeleteProduct(product: Product) {
    if(confirm("Êtes vous sûre de vouloir supprimer ce produit ?")) {
      this.productService.deleteProduct(product).subscribe({
        next: value => {
          this.onGetAllProducts();
        }
      })
    }
  }

  onGetAllProducts() {
    this.products = this.productService.getAllProducts().pipe(
      map((data) => ({state: StateEnum.LOADED, data: data})),
      startWith({state: StateEnum.LOADING}),
      catchError(err => of({state: StateEnum.ERROR, errorMessage: err.message}))
    );
  }

  onGetSelectedProducts() {
    this.products = this.productService.getSelectedProducts().pipe(
      map((data) => ({state: StateEnum.LOADED, data: data})),
      startWith({state: StateEnum.LOADING}),
      catchError(err => of({state: StateEnum.ERROR, errorMessage: err.message}))
    );
  }

  onGetAvailableProducts() {
    this.products = this.productService.getAvailableProducts().pipe(
      map((data) => ({state: StateEnum.LOADED, data: data})),
      startWith({state: StateEnum.LOADING}),
      catchError(err => of({state: StateEnum.ERROR, errorMessage: err.message}))
    );
  }

  onSearchProduct(dataForm: any) {

    this.products = this.productService.searchProduct(dataForm.keyword).pipe(
      map((data) => ({state: StateEnum.LOADED, data: data})),
      startWith({state: StateEnum.LOADING}),
      catchError(err => of({state: StateEnum.ERROR, errorMessage: err.message}))
    );
  }

  onAddProducts() {
    this.router.navigateByUrl("/add-product");
  }

  onEditProduct(product: Product) {
    this.router.navigateByUrl("/edit-product/" + product.id);
  }

  onActionEvent($event: ActionEvent) {
    switch ($event.type) {
      case ProductActionsTypes.GET_ALL_PRODUCTS: this.onGetAllProducts();
      break;
      case ProductActionsTypes.GET_SELECTED_PRODUCTS: this.onGetSelectedProducts();
      break;
      case ProductActionsTypes.GET_AVAILABLE_PRODUCTS: this.onGetAvailableProducts();
      break;
      case ProductActionsTypes.SEARCH_PRODUCTS: this.onSearchProduct($event.payload);
      break;
      case ProductActionsTypes.ADD_PRODUCTS: this.onAddProducts();
      break;
      case ProductActionsTypes.CHECKED_PRODUCT: this.onCheckedProduct($event.payload);
      break;
      case ProductActionsTypes.SELECTED_PRODUCT: this.onSelectedProduct($event.payload);
      break;
      case ProductActionsTypes.AVAILABLE_PRODUCT: this.onAvailableProduct($event.payload);
      break;
      case ProductActionsTypes.DELETE_PRODUCT: this.onDeleteProduct($event.payload);
      break;
      case ProductActionsTypes.EDIT_PRODUCT: this.onEditProduct($event.payload);
      break;
    }
  }
}

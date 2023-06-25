import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ProductsState, ProductStateEnum} from "../../ngrx/products.reducers";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products : Observable<ProductsState> | null = null;
  readonly ProductStateEnum = ProductStateEnum;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.products = this.store.pipe(
      map((state) =>  state.catalogueState)
    );
  }
}

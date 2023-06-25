import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../models/product.model";
import {Store} from "@ngrx/store";
import {
  AvailableProductAction,
  CheckedProductAction,
  DeleteProductAction,
  FavoriteProductAction
} from "../../../../ngrx/products.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit{

  @Input() product: Product | null = null;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  onCheckedProduct(product: Product) {
    this.store.dispatch(new CheckedProductAction(product));
  }

  onSelectedProduct(product: Product) {
    this.store.dispatch(new FavoriteProductAction(product));
  }

  onAvailableProduct(product: Product) {
    this.store.dispatch(new AvailableProductAction(product));
  }

  onDeleteProduct(product: Product) {
    this.store.dispatch(new DeleteProductAction(product));
  }

  onEditProduct(product: Product) {
    this.router.navigateByUrl("edit-product/" + product.id)
  }
}

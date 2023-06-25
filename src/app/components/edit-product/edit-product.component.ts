import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {EditProductAction, UpdateProductAction} from "../../ngrx/products.actions";
import {ProductsState, ProductStateEnum} from "../../ngrx/products.reducers";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  productId: number;
  productForm!: FormGroup;
  state: ProductsState | null = null;
  readonly ProductStateEnum = ProductStateEnum;
  isBuild: boolean = false;
  submited: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private router: Router
  ) {
    this.productId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.store.dispatch(new EditProductAction(this.productId));
    this.store.subscribe(state => {
      this.state = state.catalogueState;
      if(this.state?.dataState === ProductStateEnum.LOADED) {
        if(this.state?.currentProduct) {
          this.productForm = this.formBuilder.group({
            id: this.formBuilder.control(this.state?.currentProduct.id, [Validators.required]),
            name: this.formBuilder.control(this.state?.currentProduct.name, [Validators.required]),
            price: this.formBuilder.control(this.state?.currentProduct.price, [Validators.required]),
            quantity: this.formBuilder.control(this.state?.currentProduct.quantity, [Validators.required, Validators.min(1)]),
            checked: this.formBuilder.control(this.state?.currentProduct.checked),
            selected: this.formBuilder.control(this.state?.currentProduct.selected),
            available: this.formBuilder.control(this.state?.currentProduct.available),
          });
          this.isBuild = true;
        }
      }
    });
  }

  onEditProduct() {
    this.submited = true;
    if(this.productForm?.invalid) {
      return;
    }
   this.store.dispatch(new UpdateProductAction(this.productForm.value));
  }

  okUpdated() {
    this.router.navigateByUrl("/products")
  }
}

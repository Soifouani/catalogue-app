import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ProductsState, ProductStateEnum} from "../../ngrx/products.reducers";
import {Store} from "@ngrx/store";
import {AddProductAction, SaveProductAction} from "../../ngrx/products.actions";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  productForm: FormGroup | null = null;
  state: ProductsState | null = null;
  readonly ProductStateEnum = ProductStateEnum;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new AddProductAction({}));
    this.store.subscribe(state => {
      this.state = state.catalogueState;
      if(this.state?.dataState === ProductStateEnum.ADD) {
        this.productForm = this.formBuilder.group({
          name: this.formBuilder.control('', [Validators.required]),
          price: this.formBuilder.control(0.00, [Validators.required]),
          quantity: this.formBuilder.control(0, [Validators.required, Validators.min(1)]),
          checked: this.formBuilder.control(false),
          selected: this.formBuilder.control(false),
          available: this.formBuilder.control(false),
        });
      }
    });
  }

  onSaveProduct() {
    this.submitted = true;
    if(this.productForm?.invalid) {
      return;
    }
    this.store.dispatch(new SaveProductAction(this.productForm?.value));
  }

  onAddProducts() {
    this.store.dispatch(new AddProductAction({}))
  }
}

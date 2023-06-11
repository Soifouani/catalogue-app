import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  public productForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      price: this.formBuilder.control(0.00, [Validators.required]),
      quantity: this.formBuilder.control(0, [Validators.required, Validators.min(1)]),
      checked: this.formBuilder.control(false),
      selected: this.formBuilder.control(false),
      available: this.formBuilder.control(false),
    });
  }

  onSaveProduct() {
    this.submitted = true;
    if(this.productForm.invalid) {
      return;
    }
    let product : Product = this.productForm.value;
    this.productService.saveProduct(product)
      .subscribe({
        next: savedProduct => {
          alert(JSON.stringify(savedProduct));
        },
        error: err => {
          console.log(err)
        }
      });
  }
}

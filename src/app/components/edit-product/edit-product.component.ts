import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductActionsTypes} from "../../enums/productActionsTypes";
import {EventDriverService} from "../../services/event-driver.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  productId: number;
  productForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private eventDriverService: EventDriverService
  ) {
    this.productId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productService.getProductById(this.productId).subscribe({
      next: product => {
        this.productForm = this.formBuilder.group({
          id: this.formBuilder.control(product.id, [Validators.required]),
          name: this.formBuilder.control(product.name, [Validators.required]),
          price: this.formBuilder.control(product.price, [Validators.required]),
          quantity: this.formBuilder.control(product.quantity, [Validators.required, Validators.min(1)]),
          checked: this.formBuilder.control(product.checked),
          selected: this.formBuilder.control(product.selected),
          available: this.formBuilder.control(product.available),
        })
      }
    });
  }

  onEditProduct() {
    this.productService.updateProduct(this.productForm.value).subscribe({
      next: updateProduct => {
        this.eventDriverService.publishEvent({
          type: ProductActionsTypes.PRODUCT_UPDATED
        })
        alert(JSON.stringify(updateProduct));
      }
    })
  }
}

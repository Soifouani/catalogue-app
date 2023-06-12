import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {State} from "../../../models/state";
import {StateEnum} from "../../../enums/stateEnum";
import {Product} from "../../../models/product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
  @Input() products : Observable<State<Product[]>> | null = null;
  readonly StateEnum = StateEnum;

  constructor() {}

  ngOnInit(): void {
  }

}

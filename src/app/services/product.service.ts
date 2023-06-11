import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product.model";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  host: string = environment.host;

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.host);
  }

  public getSelectedProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.host + "?selected=true");
  }

  public getAvailableProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.host + "?available=true");
  }

  public checkProduct(product: Product): Observable<Product> {
    return this.http.patch<any>(this.host + "/" +product.id,
      {checked: !product.checked});
  }

  public selectedProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(this.host + "/"+ product.id,
      {selected: !product.selected});
  }

  public availableProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(this.host + "/" + product.id,
      {available: !product.available});
  }

  public deleteProduct(product: Product): Observable<void> {
    return this.http.delete<void>(this.host + "/" + product.id);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.host, product);
  }

  searchProduct(keyword: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + "?name_like=" + keyword);
  }

  public getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(this.host + "/" + productId);
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.host + "/" + product.id, product);
  }
}

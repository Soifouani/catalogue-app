import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductsComponent} from './components/products/products.component';
import {AddProductComponent} from './components/add-product/add-product.component';
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {EditProductComponent} from './components/edit-product/edit-product.component';
import {ProductsNavBarComponent} from './components/products/products-nav-bar/products-nav-bar.component';
import {ProductsListComponent} from './components/products/products-list/products-list.component';
import {ProductsItemComponent} from './components/products/products-list/products-item/products-item.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {productsReducer} from "./ngrx/products.reducers";
import {ProductsEffects} from "./ngrx/products.effects";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    HomeComponent,
    NavBarComponent,
    EditProductComponent,
    ProductsNavBarComponent,
    ProductsListComponent,
    ProductsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({catalogueState: productsReducer}),
    EffectsModule.forRoot([ProductsEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

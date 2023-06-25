import {Action} from "@ngrx/store";
import {Product} from "../models/product.model";

export enum ProductActionsTypes {
  /* Get all products */
  GET_ALL_PRODUCTS = "[Product] Get All Products",
  GET_ALL_PRODUCTS_SUCCESS = "[Product] Get All Products Success",
  GET_ALL_PRODUCTS_ERROR = "[Product] Get All Products Error",

  /* Get selected products */
  GET_SELECTED_PRODUCTS = "[Product] Get Selected Products",
  GET_SELECTED_PRODUCTS_SUCCESS = "[Product] Get Selected Products Success",
  GET_SELECTED_PRODUCTS_ERROR = "[Product] Get Selected Products Error",

  /* Get available products */
  GET_AVAILABLE_PRODUCTS = "[Product] Get Available Products",
  GET_AVAILABLE_PRODUCTS_SUCCESS = "[Product] Get Available Products Success",
  GET_AVAILABLE_PRODUCTS_ERROR = "[Product] Get Available Products Error",

  /* Get checked products */
  GET_CHECKED_PRODUCTS = "[Product] Get Checked Products",
  GET_CHECKED_PRODUCTS_SUCCESS = "[Product] Get Checked Products Success",
  GET_CHECKED_PRODUCTS_ERROR = "[Product] Get Checked Products Error",

  /* Search product */
  SEARCH_PRODUCTS = "[Product] Search Products",
  SEARCH_PRODUCTS_SUCCESS = "[Product] Search Products Success",
  SEARCH_PRODUCTS_ERROR = "[Product] Search Products Error",

  /* Favorite product */
  FAVORITE_PRODUCT = "[Product] Favorite Product",
  FAVORITE_PRODUCT_SUCCESS = "[Product] Favorite Product Success",
  FAVORITE_PRODUCT_ERROR = "[Product] Favorite Product Error",

  /* Available product */
  AVAILABLE_PRODUCT = "[Product] Available Product",
  AVAILABLE_PRODUCT_SUCCESS = "[Product] Available Product Success",
  AVAILABLE_PRODUCT_ERROR = "[Product] Available Product Error",

  /* Checked product */
  CHECKED_PRODUCT = "[Product] Checked Product",
  CHECKED_PRODUCT_SUCCESS = "[Product] Checked Product Success",
  CHECKED_PRODUCT_ERROR = "[Product] Checked Product Error",

  /* Delete product */
  DELETE_PRODUCT = "[Product] Delete Product",
  DELETE_PRODUCT_SUCCESS = "[Product] Delete Product Success",
  DELETE_PRODUCT_ERROR = "[Product] Delete Product Error",

  /* Update product */
  EDIT_PRODUCT = "[Product] Edit Product",
  EDIT_PRODUCT_SUCCESS = "[Product] Edit Product Success",
  EDIT_PRODUCT_ERROR = "[Product] Edit Product Error",

  /* Add product */
  ADD_PRODUCT = "[Product] Add Product",
  ADD_PRODUCT_SUCCESS = "[Product] Add Product Success",
  ADD_PRODUCT_ERROR = "[Product] Add Product Error",

  /* Save product */
  SAVE_PRODUCT = "[Product] Save Product",
  SAVE_PRODUCT_SUCCESS = "[Product] Save Product Success",
  SAVE_PRODUCT_ERROR = "[Product] Save Product Error",

  /* Update product */
  UPDATE_PRODUCT = "[Product] Update Product",
  UPDATE_PRODUCT_SUCCESS = "[Product] Update Product Success",
  UPDATE_PRODUCT_ERROR = "[Product] Update Product Error",
}

/* Get all product actions */

export class GetAllProductsAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload: any) {}
}

export class GetAllProductsSuccessAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class GetAllProductsErrorAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload: string) {}
}

/* Get selected product actions */

export class GetSelectedProductsAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload: any) {}
}


export class GetSelectedProductsSuccessAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class GetSelectedProductsErrorAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload: string) {}
}

/* Get available product actions */

export class GetAvailableProductsAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_AVAILABLE_PRODUCTS;
  constructor(public payload: any) {}
}


export class GetAvailableProductsSuccessAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_AVAILABLE_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class GetAvailableProductsErrorAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR;
  constructor(public payload: string) {}
}

/* Get checked product actions */

export class GetCheckedProductsAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_AVAILABLE_PRODUCTS;
  constructor(public payload: any) {}
}


export class GetCheckedProductsSuccessAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_AVAILABLE_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class GetCheckedProductsErrorAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR;
  constructor(public payload: string) {}
}

/* Search product actions */

export class SearchProductsAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.SEARCH_PRODUCTS;
  constructor(public payload: string) {}
}


export class SearchProductsSuccessAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class SearchProductsErrorAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.SEARCH_PRODUCTS_ERROR;
  constructor(public payload: string) {}
}

/* Favorite product actions */

export class FavoriteProductAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.FAVORITE_PRODUCT;
  constructor(public payload: Product) {}
}


export class FavoriteProductSuccessAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.FAVORITE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class FavoriteProductErrorAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.FAVORITE_PRODUCT_ERROR;
  constructor(public payload: string) {}
}

/* Available product actions */

export class AvailableProductAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.AVAILABLE_PRODUCT;
  constructor(public payload: Product) {}
}


export class AvailableProductSuccessAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.AVAILABLE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class AvailableProductErrorAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.AVAILABLE_PRODUCT_ERROR;
  constructor(public payload: string) {}
}

/* Checked product actions */

export class CheckedProductAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.CHECKED_PRODUCT;
  constructor(public payload: Product) {}
}


export class CheckedProductSuccessAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.CHECKED_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class CheckedProductErrorAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.CHECKED_PRODUCT_ERROR;
  constructor(public payload: string) {}
}

/* Delete product actions */

export class DeleteProductAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.DELETE_PRODUCT;
  constructor(public payload: Product) {}
}


export class DeleteProductSuccessAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.DELETE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class DeleteProductErrorAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.DELETE_PRODUCT_ERROR;
  constructor(public payload: string) {}
}

/* Add product actions */

export class AddProductAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.ADD_PRODUCT;
  constructor(public payload: any) {}
}


export class AddProductSuccessAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.ADD_PRODUCT_SUCCESS;
  constructor(public payload: any) {}
}

export class AddProductErrorAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.ADD_PRODUCT_ERROR;
  constructor(public payload: string) {}
}

/* Save product actions */

export class SaveProductAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.SAVE_PRODUCT;
  constructor(public payload: Product) {}
}


export class SaveProductSuccessAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.SAVE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class SaveProductErrorAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.SAVE_PRODUCT_ERROR;
  constructor(public payload: string) {}
}

/* Edit product actions */

export class EditProductAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.EDIT_PRODUCT;
  constructor(public payload: number) {}
}


export class EditProductSuccessAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.EDIT_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class EditProductErrorAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.EDIT_PRODUCT_ERROR;
  constructor(public payload: string) {}
}

/* Update product actions */

export class UpdateProductAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.UPDATE_PRODUCT;
  constructor(public payload: Product) {}
}


export class UpdateProductSuccessAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.UPDATE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class UpdateProductErrorAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.UPDATE_PRODUCT_ERROR;
  constructor(public payload: string) {}
}

export type ProductActions =
  GetAllProductsAction | GetAllProductsSuccessAction | GetAllProductsErrorAction |
  GetSelectedProductsAction | GetSelectedProductsSuccessAction | GetSelectedProductsErrorAction |
  GetAvailableProductsAction | GetAvailableProductsSuccessAction | GetAvailableProductsErrorAction |
  GetCheckedProductsAction | GetCheckedProductsSuccessAction | GetCheckedProductsErrorAction |
  SearchProductsAction | SearchProductsSuccessAction | SearchProductsErrorAction |
  FavoriteProductAction | FavoriteProductSuccessAction | FavoriteProductErrorAction |
  AvailableProductAction | AvailableProductSuccessAction | AvailableProductErrorAction |
  CheckedProductAction | CheckedProductSuccessAction | CheckedProductErrorAction |
  DeleteProductAction | DeleteProductSuccessAction | DeleteProductErrorAction |
  AddProductAction | AddProductSuccessAction | AddProductErrorAction |
  SaveProductAction | SaveProductSuccessAction | SaveProductErrorAction |
  EditProductAction | EditProductSuccessAction | EditProductErrorAction |
  UpdateProductAction | UpdateProductSuccessAction | UpdateProductErrorAction
;

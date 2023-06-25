import {Product} from "../models/product.model";
import {ProductActions, ProductActionsTypes} from "./products.actions";
import {Action} from "@ngrx/store";

export enum ProductStateEnum {
  LOADING = "Loading",
  LOADED = "Loaded",
  ERROR = "Error",
  INITIAL = "Initial",
  ADD = "Add",
  EDIT = "Edit",
  UPDATED = "Updated"
}

export interface ProductsState {
  products: Product[];
  errorMessage: string;
  dataState: ProductStateEnum;
  currentProduct: Product | null;
  currentAction: ProductActions | null;
}

const initState: ProductsState = {
  products: [],
  errorMessage: '',
  dataState: ProductStateEnum.INITIAL,
  currentProduct: null,
  currentAction: null
}

export function productsReducer(state: ProductsState = initState, action: Action) : ProductsState {
  switch (action.type) {
    /* Get all products */
    case ProductActionsTypes.GET_ALL_PRODUCTS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADING,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADED,
        products: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    /* Get selected product */
    case ProductActionsTypes.GET_SELECTED_PRODUCTS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADING,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADED,
        products: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {
        ...state,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    /* Get available product */
    case ProductActionsTypes.GET_AVAILABLE_PRODUCTS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADING,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.GET_AVAILABLE_PRODUCTS_SUCCESS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADED,
        products: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR:
      return {
        ...state,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    /* Get checked product */
    case ProductActionsTypes.GET_CHECKED_PRODUCTS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADING,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.GET_CHECKED_PRODUCTS_SUCCESS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADED,
        products: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.GET_CHECKED_PRODUCTS_ERROR:
      return {
        ...state,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    /* Search product */
    case ProductActionsTypes.SEARCH_PRODUCTS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADING,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADED,
        products: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.SEARCH_PRODUCTS_ERROR:
      return {
        ...state,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    /* Favorite product */
    case ProductActionsTypes.FAVORITE_PRODUCT:
      return {
        ...state,
        dataState: ProductStateEnum.LOADING,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.FAVORITE_PRODUCT_SUCCESS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADED,
        products: onCheckedChangeProductState((<ProductActions>action).payload, state.products),
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.FAVORITE_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    /* Available product */
    case ProductActionsTypes.AVAILABLE_PRODUCT:
      return {
        ...state,
        dataState: ProductStateEnum.LOADING,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.AVAILABLE_PRODUCT_SUCCESS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADED,
        products: onCheckedChangeProductState((<ProductActions>action).payload, state.products),
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.AVAILABLE_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    /* Checked product */
    case ProductActionsTypes.CHECKED_PRODUCT:
      return {
        ...state,
        dataState: ProductStateEnum.LOADING,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.CHECKED_PRODUCT_SUCCESS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADED,
        products: onCheckedChangeProductState((<ProductActions>action).payload, state.products),
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.CHECKED_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    /* Delete product */
    case ProductActionsTypes.DELETE_PRODUCT:
      return {
        ...state,
        dataState: ProductStateEnum.LOADING,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADED,
        products: onDeleteChangeProductState((<ProductActions>action).payload, state.products),
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.DELETE_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    /* Add product */
    case ProductActionsTypes.ADD_PRODUCT:
      return {
        ...state,
        dataState: ProductStateEnum.LOADING,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        dataState: ProductStateEnum.ADD,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.ADD_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    /* Save product */
    case ProductActionsTypes.SAVE_PRODUCT:
      return {
        ...state,
        dataState: ProductStateEnum.LOADING,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.SAVE_PRODUCT_SUCCESS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADED,
        products: onAddChangeProductState((<ProductActions>action).payload, [...state.products]),
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.SAVE_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    /* Edit product */
    case ProductActionsTypes.EDIT_PRODUCT:
      return {
        ...state,
        dataState: ProductStateEnum.LOADING,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        dataState: ProductStateEnum.LOADED,
        currentProduct: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.EDIT_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    /* Update product */
    case ProductActionsTypes.UPDATE_PRODUCT:
      return {
        ...state,
        dataState: ProductStateEnum.LOADING,
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        dataState: ProductStateEnum.UPDATED,
        products: onUpdateChangeProductState((<ProductActions>action).payload, state.products),
        currentAction: <ProductActions>action
      };
    case ProductActionsTypes.UPDATE_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (<ProductActions>action).payload,
        currentAction: <ProductActions>action
      };
    default:
      return {
        ...state
      };
  }
}

export function onCheckedChangeProductState(product: Product, products: Product[]) {
  return products.map((p: Product)=> p.id === product.id ? product : p);
}

export function onDeleteChangeProductState(product: Product, products: Product[]): Product[] {
  return products.filter((p: Product)=> p.id !== product.id);
}

export function onAddChangeProductState(product: Product, products: Product[]): Product[] {
  return products.concat(product);
}

export function onUpdateChangeProductState(product: Product, products: Product[]): Product[] {
  return products.map((p: Product)=> p.id === product.id ? product : p);
}

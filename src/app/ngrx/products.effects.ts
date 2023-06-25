import {Injectable} from "@angular/core";
import {ProductService} from "../services/product.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  AddProductSuccessAction,
  AvailableProductErrorAction,
  AvailableProductSuccessAction,
  CheckedProductErrorAction,
  CheckedProductSuccessAction,
  DeleteProductErrorAction,
  DeleteProductSuccessAction, EditProductErrorAction, EditProductSuccessAction,
  FavoriteProductErrorAction,
  FavoriteProductSuccessAction,
  GetAllProductsErrorAction,
  GetAllProductsSuccessAction,
  GetAvailableProductsErrorAction,
  GetAvailableProductsSuccessAction,
  GetCheckedProductsErrorAction,
  GetCheckedProductsSuccessAction,
  GetSelectedProductsAction,
  GetSelectedProductsErrorAction,
  GetSelectedProductsSuccessAction,
  ProductActions,
  ProductActionsTypes, SaveProductErrorAction, SaveProductSuccessAction,
  SearchProductsErrorAction,
  SearchProductsSuccessAction, UpdateProductErrorAction, UpdateProductSuccessAction
} from "./products.actions";

@Injectable()
export class ProductsEffects {

  constructor(
    private productService: ProductService,
    private effectAction: Actions
  ) {}

  getAllProductsEffect: Observable<ProductActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProductActionsTypes.GET_ALL_PRODUCTS),
      mergeMap((action: ProductActions) => {
        return this.productService.getAllProducts().pipe(
          map((products) => new GetAllProductsSuccessAction(products)),
          catchError((err) => of(new GetAllProductsErrorAction(err)))
        );
      })
    )
  );

  getSelectedProductsEffect: Observable<ProductActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProductActionsTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action: ProductActions) => {
        return this.productService.getSelectedProducts().pipe(
          map((products) => new GetSelectedProductsSuccessAction(products)),
          catchError((err) => of(new GetSelectedProductsErrorAction(err)))
        );
      })
    )
  );

  getAvailableProductsEffect: Observable<ProductActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProductActionsTypes.GET_AVAILABLE_PRODUCTS),
      mergeMap((action: ProductActions) => {
        return this.productService.getAvailableProducts().pipe(
          map((products) => new GetAvailableProductsSuccessAction(products)),
          catchError((err) => of(new GetAvailableProductsErrorAction(err)))
        );
      })
    )
  );

  getCheckedProductsEffect: Observable<ProductActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProductActionsTypes.GET_CHECKED_PRODUCTS),
      mergeMap((action: ProductActions) => {
        return this.productService.getSelectedProducts().pipe(
          map((products) => new GetCheckedProductsSuccessAction(products)),
          catchError((err) => of(new GetCheckedProductsErrorAction(err)))
        );
      })
    )
  );

  searchProductsEffect: Observable<ProductActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProductActionsTypes.SEARCH_PRODUCTS),
      mergeMap((action: ProductActions) => {
        return this.productService.searchProduct(action.payload).pipe(
          map((products) => new SearchProductsSuccessAction(products)),
          catchError((err) => of(new SearchProductsErrorAction(err)))
        );
      })
    )
  );

  favoriteProductEffect: Observable<ProductActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProductActionsTypes.FAVORITE_PRODUCT),
      mergeMap((action: ProductActions) => {
        return this.productService.selectedProduct(action.payload).pipe(
          map((product) => new FavoriteProductSuccessAction(product)),
          catchError((err) => of(new FavoriteProductErrorAction(err)))
        );
      })
    )
  );

  availableProductEffect: Observable<ProductActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProductActionsTypes.AVAILABLE_PRODUCT),
      mergeMap((action: ProductActions) => {
        return this.productService.availableProduct(action.payload).pipe(
          map((product) => new AvailableProductSuccessAction(product)),
          catchError((err) => of(new AvailableProductErrorAction(err)))
        );
      })
    )
  );

  checkedProductEffect: Observable<ProductActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProductActionsTypes.CHECKED_PRODUCT),
      mergeMap((action: ProductActions) => {
        return this.productService.checkProduct(action.payload).pipe(
          map((product) => new CheckedProductSuccessAction(product)),
          catchError((err) => of(new CheckedProductErrorAction(err)))
        );
      })
    )
  );

  deleteProductEffect: Observable<ProductActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProductActionsTypes.DELETE_PRODUCT),
      mergeMap((action: ProductActions) => {
        return this.productService.deleteProduct(action.payload).pipe(
          map(() => new DeleteProductSuccessAction(action.payload)),
          catchError((err) => of(new DeleteProductErrorAction(err)))
        );
      })
    )
  );

  addProductEffect: Observable<ProductActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProductActionsTypes.ADD_PRODUCT),
      map((action: ProductActions) => {
        return new AddProductSuccessAction({})
      })
    )
  );

  saveProductEffect: Observable<ProductActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProductActionsTypes.SAVE_PRODUCT),
      mergeMap((action: ProductActions) => {
        return this.productService.saveProduct(action.payload).pipe(
          map((product) => new SaveProductSuccessAction(product)),
          catchError((err) => of(new SaveProductErrorAction(err)))
        );
      })
    )
  );

  editProductEffect: Observable<ProductActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProductActionsTypes.EDIT_PRODUCT),
      mergeMap((action: ProductActions) => {
        return this.productService.getProductById(action.payload).pipe(
          map((product) => new EditProductSuccessAction(product)),
          catchError((err) => of(new EditProductErrorAction(err)))
        );
      })
    )
  );

  updatedProductEffect: Observable<ProductActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProductActionsTypes.UPDATE_PRODUCT),
      mergeMap((action: ProductActions) => {
        return this.productService.updateProduct(action.payload).pipe(
          map((product) => new UpdateProductSuccessAction(product)),
          catchError((err) => of(new UpdateProductErrorAction(err)))
        );
      })
    )
  );
}

import {ProductActionsTypes} from "../enums/productActionsTypes";

export interface ActionEvent {
  type: ProductActionsTypes;
  payload?: any;
}

import {StateEnum} from "../enums/stateEnum";

export interface State<T> {
  state: StateEnum,
  data?: T,
  errorMessage?: String
}

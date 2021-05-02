import { ActionReducerMap } from "@ngrx/store";
import { paymentReducer } from "./store/user-payment.reducer";
// import { paymentReducer } from "./store/user-payment.reducer";

export interface PaymentState {
    fName: string;
    lName: string;
    emailAddress: string;
    amount: number;
    phoneNumber: number;
  }

  export const reducers: ActionReducerMap<AccountState> = {
    payment: paymentReducer,
  };

  export interface AccountState{
      payment:PaymentState
  }

  export interface State {
    account: AccountState ;
  }
  
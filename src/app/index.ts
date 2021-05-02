import { createFeatureSelector } from "@ngrx/store";
import { PaymentState } from "./user-payment/user-payment.model";
import { createStore, applyMiddleware, compose } from 'redux';

export const selectPaymentState = createFeatureSelector<
  PaymentState
>('payment');

export interface AppState {
  payment:PaymentState,
}

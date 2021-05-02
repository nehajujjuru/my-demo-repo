import { Action } from '@ngrx/store';
import { PaymentState } from '../user-payment.model';


export enum PaymentsActionTypes {
  GET_PAYMENT = '[Practices] Get practices',
  GET_PAYMENT_SUCCESS = '[Practices] Get practices success',
  GET_PAYMENT_FAIL = '[Practices] Get practices fail'
}

export class ActionPaymentData implements Action {
    public readonly type = PaymentsActionTypes.GET_PAYMENT;
    constructor(public readonly payload: PaymentState) {}
}
export class ActionPaymentDataSuccess implements Action {
  public readonly type = PaymentsActionTypes.GET_PAYMENT_SUCCESS;
  constructor() {}
}
export class ActionPaymentDataFail implements Action {
  public readonly type = PaymentsActionTypes.GET_PAYMENT_FAIL;
  constructor() {}
}
export type PaymentActions =
  | ActionPaymentData
  | ActionPaymentDataSuccess
  | ActionPaymentDataFail;
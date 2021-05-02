import { PaymentState } from "../user-payment.model";
import { PaymentActions, PaymentsActionTypes } from "./user-payment.actions";
// import { PaymentActions, PaymentsActionTypes } from "./user-payment.actions";

export const initialState: PaymentState = {
    fName: null,
    lName: null,
    emailAddress: null,
    amount: 0,
    phoneNumber: 0,
  };

  export function paymentReducer(
    state: PaymentState = initialState,
    action: PaymentActions
  ): PaymentState {
    switch (action.type) {
        case PaymentsActionTypes.GET_PAYMENT:
            return{
                ...state,
                fName:action.payload.fName,
                lName:action.payload.lName,
                emailAddress:action.payload.emailAddress,
                phoneNumber:action.payload.phoneNumber,
                amount:action.payload.amount,

            }
      
        default:
            return state;
        }
      }

//export const featureKey = 'todosSliceState';
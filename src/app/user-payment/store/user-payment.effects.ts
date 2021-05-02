import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { PaymentService } from "../payment.service";
import { ActionPaymentData, ActionPaymentDataFail, ActionPaymentDataSuccess, PaymentsActionTypes } from "./user-payment.actions";
import { tap, switchMap, map, first } from 'rxjs/operators';

@Injectable()
export class PaymentEffects {
  @Effect({ dispatch: true })
  public paymentData = this.actions$.pipe(
     ofType<ActionPaymentData>(PaymentsActionTypes.GET_PAYMENT),
     switchMap(action => {
       return this.paymentService.getUserDetails(action.payload).pipe(
         tap(action => console.log("api success")
         )
       );}),
      map(response=>{
        if(response.status == 200){
          return new ActionPaymentDataSuccess();
        } else {
          console.log("api fail");
          return new ActionPaymentDataFail();
        }
      })
     );
     

     
  constructor(
    private actions$: Actions<Action>,
    private paymentService: PaymentService,
  ) {}
}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { validateEmail } from '../form.validators';
import { ActionPaymentData } from './store/user-payment.actions';
import { PaymentState } from './user-payment.model';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent implements OnInit {
  public paymentForm: FormGroup = new FormGroup({
    fName: new FormControl('', Validators.required),
    lName: new FormControl('', Validators.required),
    emailAddress: new FormControl('', [Validators.required,validateEmail()]),
    phoneNumber: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
  });
  constructor(private router:Router,
    private store:Store<{}>) { }

  ngOnInit(): void {
  }
  paymentFormSubmit(){
    const response:PaymentState={
      fName:this.paymentForm.get('fName').value,
      lName:this.paymentForm.get('lName').value,
      emailAddress:this.paymentForm.get('emailAddress').value,
      phoneNumber:this.paymentForm.get('phoneNumber').value,
      amount:this.paymentForm.get('amount').value,
    }
    if(this.paymentForm.valid){

    this.store.dispatch(new ActionPaymentData(response));
    } else {
      console.log("Form is invalid",this.paymentForm);
    }
  }
}

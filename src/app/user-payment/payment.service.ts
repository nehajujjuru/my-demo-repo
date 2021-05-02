import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { PaymentState } from './user-payment.model';
@Injectable({
  providedIn: 'root'
})


export class PaymentService {
  public readonly endpoint = 'http://localhost:8080/users/payment';
  constructor(
    private http: HttpClient,
  ) {}

   public getUserDetails(
     payment:PaymentState
   ):Observable<EmptySuccesResponse> {
    return this.http
      .post<any>(
        this.endpoint,
        payment,
      )
  }
}
export abstract class EmptySuccesResponse extends HttpResponse<{}> {
  public status = 200;
  public body = {};
}
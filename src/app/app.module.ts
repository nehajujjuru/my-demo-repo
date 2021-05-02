import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FEATURE_NAME } from './user-payment/store/user-payment.selector';
import { reducers } from './user-payment/user-payment.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentEffects } from './user-payment/store/user-payment.effects';
import { PaymentService } from './user-payment/payment.service';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
@NgModule({
  declarations: [
    AppComponent,
    UserPaymentComponent,
    HomePageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(FEATURE_NAME, reducers),
   EffectsModule.forRoot([PaymentEffects]),
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';


const routes: Routes = [
  { path: '', component: HomePageComponent ,pathMatch:'full' },
  { path: 'payment', component: UserPaymentComponent ,pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: 'payment'
}, {
  path: 'payment', loadChildren: '../payment/payment.module#PaymentModule'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

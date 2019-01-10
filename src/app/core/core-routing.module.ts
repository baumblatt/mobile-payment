import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './containers/layout/layout.component';
import {LoginComponent} from './containers/login/login.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'layout'},
    {
        path: 'layout', component: LayoutComponent, children: [
            {path: '', pathMatch: 'full', redirectTo: 'payment'},
            {path: 'payment', canLoad: [AuthGuard], loadChildren: '../payment/payment.module#PaymentModule'},
            {path: 'login', component: LoginComponent},
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

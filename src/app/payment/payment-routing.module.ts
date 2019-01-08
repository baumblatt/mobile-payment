import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DummyComponent} from './containers/dummy/dummy.component';

const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: 'dummy'
}, {
  path: 'dummy', component: DummyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }

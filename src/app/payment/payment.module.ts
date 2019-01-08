import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {PaymentRoutingModule} from './payment-routing.module';
import { DummyComponent } from './containers/dummy/dummy.component';

@NgModule({
  declarations: [DummyComponent],
  imports: [
    SharedModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }

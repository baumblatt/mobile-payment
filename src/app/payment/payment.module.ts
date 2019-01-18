import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from '../shared/shared.module';
import {DummyComponent} from './containers/dummy/dummy.component';

import {PaymentRoutingModule} from './payment-routing.module';
import {BalanceEffects} from './store/effects/balance.effects';
import {paymentReducers} from './store/reducers/payment.reducer';

@NgModule({
    declarations: [DummyComponent],
    imports: [
        SharedModule,
        PaymentRoutingModule,
        EffectsModule.forFeature([BalanceEffects]),
        StoreModule.forFeature('payment', paymentReducers),
    ]
})
export class PaymentModule {
}

import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from '../shared/shared.module';
import {LayoutComponent} from './containers/layout/layout.component';
import {LoginComponent} from './containers/login/login.component';

import {CoreRoutingModule} from './core-routing.module';
import {AuthGuard} from './guard/auth.guard';
import {UsersEffects} from './store/effects/users.effects';
import {coreReducers} from './store/reducers/core.reducers';

@NgModule({
    declarations: [LayoutComponent, LoginComponent],
    imports: [
        SharedModule,
        CoreRoutingModule,
        EffectsModule.forFeature([UsersEffects]),
        StoreModule.forFeature('core', coreReducers),
    ],
    providers: [AuthGuard]
})

export class CoreModule {
}


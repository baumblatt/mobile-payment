import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {LayoutComponent} from './containers/layout/layout.component';
import {LoginComponent} from './containers/login/login.component';

import {CoreRoutingModule} from './core-routing.module';
import {AuthGuard} from './guard/auth.guard';

@NgModule({
  declarations: [LayoutComponent, LoginComponent],
  imports: [
    SharedModule,
    CoreRoutingModule,
  ],
  providers: [AuthGuard]
})

export class CoreModule { }


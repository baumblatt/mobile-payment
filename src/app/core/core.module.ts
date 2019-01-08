import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {CoreRoutingModule} from './core-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    SharedModule,
    CoreRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})

export class CoreModule { }


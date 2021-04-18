import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { TokenGuardService } from './services/token-guard.service';


@NgModule({
  declarations: [LayoutComponent],
  providers: [TokenGuardService],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NzLayoutModule,
    NzMenuModule
  ]
})
export class LayoutModule { }

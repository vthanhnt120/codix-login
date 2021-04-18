import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { TokenGuardService } from './services/token-guard.service';

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    canActivate: [
      TokenGuardService
    ],
    children: [
      {path: '', redirectTo: 'account'},
      {
        path: 'account', loadChildren: () => import('../account/account.module').then(m => m.AccountModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

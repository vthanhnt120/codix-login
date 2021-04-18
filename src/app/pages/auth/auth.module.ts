import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { LoginComponent } from './containers/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { RegistrationComponent } from './containers/registration/registration.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, AuthHeaderComponent, RegistrationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NzCardModule,
    NzInputModule,
    NzFormModule,
    NzButtonModule,
    NzGridModule,
    NzCheckboxModule,
    NzNotificationModule
  ]
})
export class AuthModule { }

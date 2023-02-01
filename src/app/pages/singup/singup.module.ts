import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingupPageRoutingModule } from './singup-routing.module';

import { SingupPage } from './singup.page';
import { InputModule } from 'src/app/components/input/input.module';
import { LoginPageRoutingModule } from '../login/login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    ReactiveFormsModule,
    SingupPageRoutingModule,
    LoginPageRoutingModule
  ],
  declarations: [SingupPage]
})
export class SingupPageModule {}

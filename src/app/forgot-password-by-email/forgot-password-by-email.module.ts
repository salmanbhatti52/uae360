import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ForgotPasswordByEmailPageRoutingModule } from './forgot-password-by-email-routing.module';

import { ForgotPasswordByEmailPage } from './forgot-password-by-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordByEmailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ForgotPasswordByEmailPage]
})
export class ForgotPasswordByEmailPageModule {}

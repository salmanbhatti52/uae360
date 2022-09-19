import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpByEmailPageRoutingModule } from './otp-by-email-routing.module';

import { OtpByEmailPage } from './otp-by-email.page';
import { NgOtpInputModule } from  'ng-otp-input';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpByEmailPageRoutingModule,
    NgOtpInputModule
  ],
  declarations: [OtpByEmailPage]
})
export class OtpByEmailPageModule {}

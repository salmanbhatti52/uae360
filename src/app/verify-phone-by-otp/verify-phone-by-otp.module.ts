import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyPhoneByOtpPageRoutingModule } from './verify-phone-by-otp-routing.module';

import { VerifyPhoneByOtpPage } from './verify-phone-by-otp.page';
import { NgOtpInputModule } from  'ng-otp-input';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyPhoneByOtpPageRoutingModule,
    NgOtpInputModule
  ],
  declarations: [VerifyPhoneByOtpPage]
})
export class VerifyPhoneByOtpPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelBookingPopupPageRoutingModule } from './cancel-booking-popup-routing.module';

import { CancelBookingPopupPage } from './cancel-booking-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelBookingPopupPageRoutingModule
  ],
  declarations: [CancelBookingPopupPage]
})
export class CancelBookingPopupPageModule {}

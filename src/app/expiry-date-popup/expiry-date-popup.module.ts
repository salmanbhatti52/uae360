import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpiryDatePopupPageRoutingModule } from './expiry-date-popup-routing.module';

import { ExpiryDatePopupPage } from './expiry-date-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpiryDatePopupPageRoutingModule
  ],
  declarations: [ExpiryDatePopupPage]
})
export class ExpiryDatePopupPageModule {}

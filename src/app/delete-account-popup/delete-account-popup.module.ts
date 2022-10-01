import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteAccountPopupPageRoutingModule } from './delete-account-popup-routing.module';

import { DeleteAccountPopupPage } from './delete-account-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteAccountPopupPageRoutingModule
  ],
  declarations: [DeleteAccountPopupPage]
})
export class DeleteAccountPopupPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedPaymentMethodsPageRoutingModule } from './saved-payment-methods-routing.module';

import { SavedPaymentMethodsPage } from './saved-payment-methods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedPaymentMethodsPageRoutingModule
  ],
  declarations: [SavedPaymentMethodsPage]
})
export class SavedPaymentMethodsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { NewPaymentMethodPageRoutingModule } from './new-payment-method-routing.module';

import { NewPaymentMethodPage } from './new-payment-method.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewPaymentMethodPageRoutingModule
  ],
  declarations: [NewPaymentMethodPage]
})
export class NewPaymentMethodPageModule {}

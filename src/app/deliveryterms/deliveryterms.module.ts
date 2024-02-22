import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliverytermsPageRoutingModule } from './deliveryterms-routing.module';

import { DeliverytermsPage } from './deliveryterms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliverytermsPageRoutingModule
  ],
  declarations: [DeliverytermsPage]
})
export class DeliverytermsPageModule {}

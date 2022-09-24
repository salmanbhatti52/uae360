import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiveRatingsPopupPageRoutingModule } from './give-ratings-popup-routing.module';

import { GiveRatingsPopupPage } from './give-ratings-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiveRatingsPopupPageRoutingModule
  ],
  declarations: [GiveRatingsPopupPage]
})
export class GiveRatingsPopupPageModule {}

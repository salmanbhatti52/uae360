import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharerequirmentPageRoutingModule } from './sharerequirment-routing.module';

import { SharerequirmentPage } from './sharerequirment.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    SharerequirmentPageRoutingModule
  ],
  declarations: [SharerequirmentPage]
})
export class SharerequirmentPageModule { }

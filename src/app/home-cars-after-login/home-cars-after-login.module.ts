import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';

import { HomeCarsAfterLoginPageRoutingModule } from './home-cars-after-login-routing.module';

import { HomeCarsAfterLoginPage } from './home-cars-after-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    HomeCarsAfterLoginPageRoutingModule
  ],
  declarations: [HomeCarsAfterLoginPage]
})
export class HomeCarsAfterLoginPageModule {}

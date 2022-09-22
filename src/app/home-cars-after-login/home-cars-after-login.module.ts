import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeCarsAfterLoginPageRoutingModule } from './home-cars-after-login-routing.module';

import { HomeCarsAfterLoginPage } from './home-cars-after-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeCarsAfterLoginPageRoutingModule
  ],
  declarations: [HomeCarsAfterLoginPage]
})
export class HomeCarsAfterLoginPageModule {}

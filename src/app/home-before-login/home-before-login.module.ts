import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeBeforeLoginPageRoutingModule } from './home-before-login-routing.module';

import { HomeBeforeLoginPage } from './home-before-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeBeforeLoginPageRoutingModule
  ],
  declarations: [HomeBeforeLoginPage]
})
export class HomeBeforeLoginPageModule {}

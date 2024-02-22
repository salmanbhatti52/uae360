import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoptimingsPageRoutingModule } from './shoptimings-routing.module';

import { ShoptimingsPage } from './shoptimings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoptimingsPageRoutingModule
  ],
  declarations: [ShoptimingsPage]
})
export class ShoptimingsPageModule {}

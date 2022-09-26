import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveChatScreenPageRoutingModule } from './live-chat-screen-routing.module';

import { LiveChatScreenPage } from './live-chat-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveChatScreenPageRoutingModule
  ],
  declarations: [LiveChatScreenPage]
})
export class LiveChatScreenPageModule {}

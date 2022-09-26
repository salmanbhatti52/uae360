import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveChatScreenPage } from './live-chat-screen.page';

const routes: Routes = [
  {
    path: '',
    component: LiveChatScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveChatScreenPageRoutingModule {}

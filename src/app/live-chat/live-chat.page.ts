import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.page.html',
  styleUrls: ['./live-chat.page.scss'],
})
export class LiveChatPage implements OnInit {

  constructor(public navCtrlr:NavController) { }

  ngOnInit() {
  }
  startLiveChat(){
    this.navCtrlr.navigateRoot('live-chat-screen');
  }
}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { interval } from 'rxjs';
@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.page.html',
  styleUrls: ['./live-chat.page.scss'],
})
export class LiveChatPage implements OnInit {
interval:any;

  constructor(public navCtrlr:NavController) { }

  ngOnInit() {
  }
 
  ionViewWillLeave(){
    console.log('leave view');
  }

  startLiveChat(){
    this.navCtrlr.navigateForward('live-chat-screen');
  }
}

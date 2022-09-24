import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  totalNotifications = 6;
  constructor(public navCtrlr:NavController) { }

  ngOnInit() {
  }
  gotoNotifications(){
    this.navCtrlr.navigateRoot('notifications');
  }
  homeTab(){
    this.navCtrlr.navigateRoot('home-cars-after-login');
  }
  messagesTab(){
    this.navCtrlr.navigateRoot('messages');
  }
  bookingTab(){
    this.navCtrlr.navigateRoot('bookings');
  }
  favoriteTab(){
    this.navCtrlr.navigateRoot('favorites');
  }
  gotoMessageOwnerSide(){
    this.navCtrlr.navigateRoot('message-owner-side');
  }
}

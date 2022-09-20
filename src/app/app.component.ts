import { Component } from '@angular/core';
import { MenuController,NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public appPages = [
    { title: 'Browse', url: '/home-before-login', img: 'assets/images/icons/search_sm.svg' },
    { title: 'Live Chat', url: '/live-chat', img: 'assets/images/icons/live_chat_sm.svg' },
    { title: 'About Us', url: 'about-us', img: 'assets/images/icons/about_us_sm.svg' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public menu:MenuController,
    public router:Router,
    public navCtrl:NavController) {}
  closeMenu(){
    this.menu.close();
  }
  gotoSignIn(){
    this.menu.toggle();
    this.navCtrl.navigateForward('sign-in');
  }
}

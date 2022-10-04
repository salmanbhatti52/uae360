import { Component } from '@angular/core';
import { MenuController,NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {SplashScreen} from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public appPages = [
    { title: 'Browse', url: '/home-before-login', img: 'assets/images/icons/search_sm.svg' },
    { title: 'Settings', url: '/settings', img: 'assets/images/icons/settings_sm.svg' },
    { title: 'Live Chat', url: '/live-chat', img: 'assets/images/icons/live_chat_sm.svg' },
    { title: 'About Us', url: 'about-us', img: 'assets/images/icons/about_us_sm.svg' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public menu:MenuController,
    public router:Router,
    public navCtrl:NavController,public platform:Platform) {
      // this.platform.ready().then(async () => {
      //   setTimeout(()=>{
      //      SplashScreen.hide({
      //        fadeOutDuration: 1000
      //      });
      //    }, 2000)
  //  });


      // setTimeout(() => {
      //   SplashScreen.hide();
      // }, 3000);
    }

  ngOnInit() {

    this.platform.ready().then(() => {
      setTimeout(()=>{
        SplashScreen.hide({
          fadeOutDuration: 1000
        });
      },10000)
      
    })
  }
  closeMenu(){
    this.menu.close();
  }
  gotoSignIn(){
    this.menu.toggle();
    this.navCtrl.navigateForward('sign-in');
  }
  
}

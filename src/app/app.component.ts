import { Component } from '@angular/core';
import { MenuController,NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {SplashScreen} from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appUserId:any;
  public appPages = [
    { title: 'Browse', url: '/home-before-login', img: 'assets/images/icons/search_sm.svg' , status:'notLoggedIn' },
    { title: 'Settings', url: '/settings', img: 'assets/images/icons/settings_sm.svg' , status:'LoggedIn' },
    { title: 'Live Chat', url: '/live-chat', img: 'assets/images/icons/live_chat_sm.svg' , status:'notLoggedIn' },
    { title: 'About Us', url: 'about-us', img: 'assets/images/icons/about_us_sm.svg' , status:'notLoggedIn'  },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public menu:MenuController,
    public router:Router,
    public navCtrl:NavController,
    public platform:Platform,
    public api:ApiService) {
      this.appUserId = this.api.appUserId;
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
    this.appUserId = localStorage.getItem('appUserId');
    console.log(this.appUserId);
    
  }

  logout(){
    this.api.appUserId = null;
    localStorage.removeItem('appUserId');
    console.log('appUserId removed');
    this.router.navigate(['/home-before-login']);
    this.closeMenu();
  }
  closeMenu(){
    this.menu.close();
  }
  gotoSignIn(){
    this.menu.toggle();
    this.navCtrl.navigateForward('sign-in');
  }
  
}

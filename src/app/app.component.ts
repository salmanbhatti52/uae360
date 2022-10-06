import { Component } from '@angular/core';
import { MenuController,NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {SplashScreen} from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';
import { CheckUserService } from './check-user.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appUserId:any;
  appPages = [];
  constructor(public menu:MenuController,
    public router:Router,
    public navCtrl:NavController,
    public platform:Platform,
    public checkUser:CheckUserService) {
      
    // this.appUserId = this.checkUser.appUserId;
    // this.checkUser.checkUser();
    // this.appPages = this.checkUser.appPages;
     
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

  logout(){
    this.checkUser.appUserId = null;
    localStorage.removeItem('appUserId');
    console.log('appUserId removed');
    // this.router.navigate(['/home-before-login']);
    this.navCtrl.navigateForward('home-before-login');
    this.closeMenu();
  }
  closeMenu(){
    this.menu.close();
  }
  gotoSignIn(){
    this.menu.toggle();
    this.navCtrl.navigateForward('sign-in');
  }
  goForEditProfile(){
    this.navCtrl.navigateForward('edit-profile');
    this.closeMenu();
  }
  
}

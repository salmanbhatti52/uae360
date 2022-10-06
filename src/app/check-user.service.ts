import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckUserService {
  appUserId = localStorage.getItem('appUserId');
  appPages= [];
  constructor() { }

  checkUser(){
    this.appUserId
    if(this.appUserId == null){
      this.appPages = [
        { title: 'Browse', url: '/home-before-login', img: 'assets/images/icons/search_sm.svg'  },
        { title: 'Live Chat', url: '/live-chat', img: 'assets/images/icons/live_chat_sm.svg' },
        { title: 'About Us', url: '/about-us', img: 'assets/images/icons/about_us_sm.svg'},
      ];
    }else if(this.appUserId != null){
      this.appPages = [
        { title: 'Home', url: '/home-cars-after-login', img: 'assets/images/icons/home_sm.png'  },
        { title: 'Settings', url: '/settings', img: 'assets/images/icons/settings_sm.svg'  },
        { title: 'Live Chat', url: '/live-chat', img: 'assets/images/icons/live_chat_sm.svg' },
        { title: 'About Us', url: '/about-us', img: 'assets/images/icons/about_us_sm.svg'},
      ];
    }else{

    }
    
  }
}

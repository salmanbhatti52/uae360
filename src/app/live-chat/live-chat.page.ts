import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { interval } from 'rxjs';
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
    clearInterval(this.interval);
    console.log('leave view');
    
  }
  startLiveChat(){
    // var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    // (function () {
    //   var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    //   s1.async = true;
    //   s1.src = 'https://embed.tawk.to/63b4123f47425128790b610e/1glrmeic3';
    //   s1.charset = 'UTF-8';
    //   s1.setAttribute('crossorigin', '*');
    //   s0.parentNode.insertBefore(s1, s0);
    // })();
   
    this.navCtrlr.navigateForward('live-chat-screen');
  }
}

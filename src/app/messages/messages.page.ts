import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';
// import { interval } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  totalNotifications = 6;
  chatList: any;
  interval: any;
  response = true;
  constructor(public navCtrlr:NavController,
    public checkUser:CheckUserService,
    public api:ApiService,
    public router:Router) {
      // in 3 seconds do something
      // interval(1000).subscribe(x => {
      //   this.getAllChatAgain();
      // });


     
    }
    ionViewWillEnter(){
      this.interval = setInterval(() => {
        this.getAllChatAgain();
      },1000);
    }
    ionViewWillLeave() {
      clearInterval(this.interval);
      console.log('leave view');
    }

  ngOnInit() {
    this.getAllChat();

  }
  

  getAllChat(){
    let data = {
      appUserId: this.checkUser.appUserId  
    };
    this.api.showLoading();
    this.api.sendRequest("getAllChat",data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log("All Chat Response: ",res);
      
      if(res.status == 'success'){
        if(res.data.length == 0){
          this.response = false;
        }
        this.chatList = res.data;
        for(let chat of this.chatList){
          if(chat.last_message.message){
            chat.last_message.message =  JSON.parse(chat.last_message.message) 
          }
         
        }
      } 
      
    },(err)=>{
      this.api.hideLoading();
      console.log("Error: ",err);
      
    });
  }
  getAllChatAgain(){
    let data = {
      appUserId: this.checkUser.appUserId  
    };
    // this.api.showLoading();
    this.api.sendRequest("getAllChat",data).subscribe((res:any)=>{
      // this.api.hideLoading();
      console.log("All Chat Response: ",res);
      if(res.status == 'success'){
        if(res.data.length == 0){
          this.response = false;
        }
        this.chatList = res.data;
        for(let chat of this.chatList){
          if(chat.last_message.message){
            chat.last_message.message =  JSON.parse(chat.last_message.message) 
          }
        }
      }
      
    },(err)=>{
      // this.api.hideLoading();
      console.log("Error: ",err);
      
    });
  }


  
  gotoNotifications(){
    this.router.navigate(['/notifications']);
  }
  homeTab(){
    this.router.navigate(['/home-cars-after-login']);
  }
  messagesTab(){
    this.router.navigate(['/messages']);
  }
  bookingTab(){
    this.router.navigate(['/bookings']);
  }
  favoriteTab(){
    this.router.navigate(['/favorites']);
  }
  // homeTab(){
  //   this.navCtrlr.navigateRoot('home-cars-after-login');
  // }
  // messagesTab(){
  //   this.navCtrlr.navigateRoot('messages');
  // }
  // bookingTab(){
  //   this.navCtrlr.navigateRoot('bookings');
  // }
  // favoriteTab(){
  //   this.navCtrlr.navigateRoot('favorites');
  // }
  // startMessageOwnerSide(recieverId){
  //   this.startchat(recieverId);
  //   // this.navCtrlr.navigateForward(['/message-owner-side',{
  //   //   company_id:recieverId
  //   // }]);
  // }
  startChat(recieverId,companyName,companyOnline){
    let data = {
      requestType:"startChat",
      userId:this.checkUser.appUserId,
      otherUserId:recieverId
    }
    this.api.showLoading();
    this.api.sendRequest("Chat", data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log("Start_chat_Request_Response: ",res);
      if(res.status == 'success'){
        this.navCtrlr.navigateForward(['/message-owner-side',{
          company_id: recieverId,
          company_name:companyName,
          company_online:companyOnline
        }]);
      }
    },(err)=>{
      console.log("Error: ",err);
      
    })
  }
}

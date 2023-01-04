import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  totalNotifications:Number;
  chatList: any;
  interval: any;
  response :boolean;
  constructor(public navCtrlr:NavController,
    public checkUser:CheckUserService,
    public api:ApiService,
    public router:Router) {
    
  }

  ionViewWillEnter(){
    this.interval = setInterval(() => {
      this.getAllChatAgain();
    },2000);

    this.getNotifications();
  }
  ionViewWillLeave() {
    clearInterval(this.interval);
    console.log('leave view');
  }

  getNotifications(){
    let data = {
      users_id:this.checkUser.appUserId
    };
    this.api.sendRequest('notifications_unread',data).subscribe((res:any)=>{
      console.log("Notification Respone: ",res);
      if(res.status == 'success'){
        if(res.data.length > 0){
          this.totalNotifications = res.data.length
        }else if(res.data.length == 0){
          this.totalNotifications = 0;
        }
        
      }else if(res.status == 'error'){

      }
      
    },(err)=>{
      console.log("Api Error: ",err);
      
    })
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
        }else{
          this.response = true;
          this.chatList = res.data;
          for(let chat of this.chatList){
            if(chat.last_message.message){
              chat.last_message.message =  JSON.parse(chat.last_message.message) 
            }
           
          }
        }
        
      }else if(res.status == 'error'){
        this.response = false;
      }else{

      }
      
    },(err)=>{
      this.api.hideLoading();
      console.log("Error: ",err);
      this.response = false;
    });
  }
  getAllChatAgain(){
    let data = {
      appUserId: this.checkUser.appUserId  
    };
    
    this.api.sendRequest("getAllChat",data).subscribe((res:any)=>{
      
      console.log("All Chat Response: ",res);
      if(res.status == 'success'){
        if(res.data.length == 0){
          this.response = false;
        }else{
          this.response = true;
          this.chatList = res.data;
          for(let chat of this.chatList){
            if(chat.last_message.message){
              chat.last_message.message =  JSON.parse(chat.last_message.message) 
            }
          }
        }
        
      }else if(res.status == 'error'){
        this.response = false;
      }else{

      }
      
    },(err)=>{
      console.log("Error: ",err);
      this.response = false;
      
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

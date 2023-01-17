import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonTextarea } from '@ionic/angular';

@Component({
  selector: 'app-live-chat-screen',
  templateUrl: './live-chat-screen.page.html',
  styleUrls: ['./live-chat-screen.page.scss'],
})
export class LiveChatScreenPage implements OnInit {
  @ViewChild(IonContent) content: IonContent; 
  @ViewChild(IonTextarea) textarea: IonTextarea; 
  selectedAdmin:any;
  interval:any;
  messages: any;
  previousMsgsCount: any;
  NewMsgsCount: any;
  constructor(public location:Location,
    public checkUser:CheckUserService,
    public api:ApiService,
    public activatedRoute:ActivatedRoute
    ) { }

  ngOnInit() {
    this.selectedAdmin = this.activatedRoute.snapshot.params['selected_admin'];
    console.log("Selected Admin: ",this.selectedAdmin);
    this.getMessagesLive();
    this.updateMessagesLive();
  }

  ionViewWillEnter(){
    this.interval = setInterval(() => {
      this.getMessagesLiveAgain();
      // this.updateMessagesLive();
    },3000);
     
  }

  ionViewWillLeave(){
    clearInterval(this.interval);
    console.log('leave view');
  }

  scrollToBottom(){
    this.content.scrollToBottom(0);
  }

  getMessagesLive(){
    let data ={
      requestType:"getMessages",
      userId:this.checkUser.appUserId,
      otherUserId:this.selectedAdmin
    }
    this.api.showLoading();
    this.api.sendRequest("ChatLive",data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log("Resposne: ",res);
      if(res.status == 'success'){
        this.messages = res.data;
        this.previousMsgsCount = res.data.length
        this.scrollToBottom();
      }

    },(err)=>{
      this.api.hideLoading();
      console.log("Api Error: ",err);
      
    })
  }

  getMessagesLiveAgain(){
    let data ={
      requestType:"getMessages",
      userId:this.checkUser.appUserId,
      otherUserId:this.selectedAdmin
    }
    this.api.sendRequest("ChatLive",data).subscribe((res:any)=>{
      console.log("Resposne: ",res);
      if(res.status == 'success'){
        this.messages = res.data;
        this.NewMsgsCount = res.data.length;
        if(this.previousMsgsCount < this.NewMsgsCount){
          this.scrollToBottom();
          this.previousMsgsCount = this.NewMsgsCount
        }
      }

    },(err)=>{
      console.log("Api Error: ",err);
      
    })
  }
  updateMessagesLive(){
    let data ={
      requestType:"updateMessages",
      userId:this.checkUser.appUserId,
      otherUserId:this.selectedAdmin
    }
    this.api.sendRequest("ChatLive",data).subscribe((res:any)=>{
      console.log("Resposne: ",res);
      if(res.status == 'success'){
        console.log("Message updated.");
        this.scrollToBottom();
      }

    },(err)=>{
      console.log("Api Error: ",err);
      
    })
  }

  sendMessagesLive(message){
    console.log("Message: ",message);
    
    let data ={
      requestType:"sendMessage",
      sender_type:"Users",
      userId:this.checkUser.appUserId,
      otherUserId:this.selectedAdmin,
      content:message,
      messageType:"1"
    }
    this.api.sendRequest("ChatLive",data).subscribe((res:any)=>{
      console.log("Resposne: ",res);
      if(res.status == 'success'){
        this.getMessagesLive();
      }

    },(err)=>{
      console.log("Api Error: ",err);
      
    })
    this.textarea.value = '';
  }


  goBack(){
    this.location.back();
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../services/api.service';
import { CheckUserService } from '../check-user.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { interval } from 'rxjs';
import { IonContent, IonTextarea } from '@ionic/angular';

@Component({
  selector: 'app-message-owner-side',
  templateUrl: './message-owner-side.page.html',
  styleUrls: ['./message-owner-side.page.scss'],
})
export class MessageOwnerSidePage implements OnInit {
  chat_ids:any;
  messages: any;
  companyId: any;
  companyName:any;
  @ViewChild(IonContent) content: IonContent; 
  @ViewChild(IonTextarea) textarea: IonTextarea; 
  companyOnline: any;
  interval:any;
  previousMsgsCount: any;
  NewMsgsCount: any;
  constructor(public location:Location,
    public api:ApiService,
    public checkUser:CheckUserService,
    public router:Router,
    public acitvatedRoute:ActivatedRoute) { 

  }
  ionViewWillEnter(){
    this.interval = setInterval(() => {
      this.getMessagesAgain();
    },3000);
  }
  ionViewWillLeave() {
    clearInterval(this.interval);
    console.log('leave view');
  }
  ngOnInit() {
    
    this.companyId = this.acitvatedRoute.snapshot.params['company_id'];
    console.log('companyId: ', this.companyId);
    this.companyName = this.acitvatedRoute.snapshot.params['company_name'];
    console.log('company name: ',this.companyName);
    this.companyOnline = this.acitvatedRoute.snapshot.params['company_online'];
    console.log('company name: ',this.companyName);
    
    this.getMessages();
    this.updateMessages(); 
  }
  scrollToBottom(){
    this.content.scrollToBottom(0);
  }
  getMessages(){
    
    let data = {
      requestType:"getMessages",
      userId:this.checkUser.appUserId,
      otherUserId:this.companyId,
    }
    console.log('Data: ',data);
    this.api.showLoading();
    this.api.sendRequest('Chat',data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log("Response: ",res);
      if(res.status == 'success'){
        this.messages = res.data;
        this.previousMsgsCount = res.data.length
        this.scrollToBottom();
      }
    },(err)=>{
      this.api.hideLoading();
      console.log("Error: ",err);
      
    })
  }
  getMessagesAgain(){
    
    let data = {
      requestType:"getMessages",
      userId:this.checkUser.appUserId,
      otherUserId:this.companyId,
    }
    console.log('Data: ',data);
    
    this.api.sendRequest('Chat',data).subscribe((res:any)=>{
      
      console.log("Response: ",res);
      if(res.status == 'success'){
        this.messages = res.data;
        this.NewMsgsCount = res.data.length;
        if(this.previousMsgsCount < this.NewMsgsCount){
          this.scrollToBottom();
          this.previousMsgsCount = this.NewMsgsCount
        }
        
      }
    },(err)=>{
      console.log("Error: ",err);
      
    })
  }
  sendMessage(msg){
    console.log('user Typed Message: ',msg);
    
    let data = {
      requestType:"sendMessage",
      sender_type:"Users",
      userId:this.checkUser.appUserId,
      otherUserId:this.companyId,
      content:msg,
      messageType:"1"
    }
    console.log('data: ',data);
    this.api.sendRequest('Chat',data).subscribe((res:any)=>{
      console.log('Send Message API Response: ',res);
      if(res.status == 'success'){
        console.log("API Success Response: ",res.message);
        this.getMessages();
      }
    },(err)=>{
      console.log("Error: ",err);
      
    });
    this.textarea.value = '';
  }
  updateMessages(){
    let data = {
      requestType:"updateMessages",
      userId:this.checkUser.appUserId,
      otherUserId:this.companyId
    }
    console.log("upadteMessageData: ",data);
    
    this.api.sendRequest("Chat",data).subscribe((res:any)=>{
      console.log('upadteMessagesApiResponse: ',res);
      if(res.status == 'success'){
        console.log("Message updated.");
        this.scrollToBottom();
        
      }
    },(err)=>{
      console.log("Error: ",err);
      
    });
  }
  goBack(){
    this.router.navigate(['/messages']);
  }
}

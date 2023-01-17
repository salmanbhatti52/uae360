import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.page.html',
  styleUrls: ['./live-chat.page.scss'],
})
export class LiveChatPage implements OnInit {
  interval:any;
  adminsList:any;
  selectedAdmin: any;
  adminId: any;

  constructor(public navCtrlr:NavController,
    public api:ApiService,
    public checkUser:CheckUserService,
    public router:Router) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.getAdminsList();
    this.getAllChatLive();
  }
 
  ionViewWillLeave(){
    console.log('leave view');
  }

  getAdminsList(){
    this.api.getData("GetAdmins").subscribe((res:any)=>{
      console.log("Resposne: ",res);
      if(res.status == 'success'){
        this.adminsList = res.data;
        console.log("adminsList: ",this.adminsList);
      }
    },(err)=>{
      console.log("Api Error: ",err);
      
    })

  }

  getAllChatLive(){
    let data ={
      appUserId: this.checkUser.appUserId
    }
    this.api.sendRequest("getAllChatLive",data).subscribe((res:any)=>{
      console.log("Resposne: ",res);
      if(res.status == 'success'){
        if(res.data.length > 0){
          this.adminId = res.data[0].sender_id
          console.log("Admin Id: ",this.adminId);
        }
        
          
      }

    },(err)=>{
      console.log("Api Error: ",err);
      
    })
  }

  startLiveChat(){
    console.log("Admin Id: ",this.adminId);
    
    if(this.adminId === undefined){
      let arrayLength = this.adminsList.length
      console.log("arrayLength: ",arrayLength);
      let randomValue = Math.floor(Math.random() * arrayLength)
      console.log("randomValue: ",randomValue);
      this.selectedAdmin = this.adminsList[randomValue];
      console.log("Selected Admin: ",this.selectedAdmin);
      
      let data ={
        requestType:"startChat",
        userId:this.checkUser.appUserId,
        otherUserId:this.selectedAdmin.users_system_id
      }
      this.api.sendRequest("ChatLive",data).subscribe((res:any)=>{
        console.log("Resposne: ",res);
        if(res.status == 'success'){

          this.router.navigate(['/live-chat-screen',{   
            selected_admin: this.selectedAdmin.users_system_id
          }]);

        }

      },(err)=>{
        console.log("Api Error: ",err);
        
      })
    }else{
      this.router.navigate(['/live-chat-screen',{   
        selected_admin: this.adminId
      }]);
      
    }
    
    
  }
}

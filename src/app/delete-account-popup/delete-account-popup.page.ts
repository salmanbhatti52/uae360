import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-delete-account-popup',
  templateUrl: './delete-account-popup.page.html',
  styleUrls: ['./delete-account-popup.page.scss'],
})
export class DeleteAccountPopupPage implements OnInit {
  localUserData: string;

  constructor(public modalCtrlr:ModalController,
    public checkUser:CheckUserService,
    public navCtrlr:NavController,
    public api:ApiService) { }

  ngOnInit() {
  }
  justCloseModal(){
    return this.modalCtrlr.dismiss(null, 'closeModal');
  }
  deleteAccount(){
     
    console.log('localUserData: ',this.api.localUserData );
    
    let data = {
      user_email:this.api.localUserData.email,
      delete_reason : "test delete",
      comments:"Hello"
    }
    console.log("Data: ",data);
    
    this.api.showLoading();
    this.api.sendRequest('delete_account',data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log('Response: ',res);
      if(res.status=='success'){
        this.api.presentToast(res.message);
        
        this.checkUser.appUserId = null;
        localStorage.removeItem('appUserId');
        console.log('appUserId removed');
        console.log(this.checkUser.appUserId);
        this.navCtrlr.navigateForward('sign-in');
        return this.modalCtrlr.dismiss('delete my account', 'delete_account');

      }else if(res.status == 'error'){
        
        this.api.presentToast(res.message);
        this.api.hideLoading();
        console.log("Error Response: ",res);

        this.checkUser.appUserId = null;
        localStorage.removeItem('appUserId');
        console.log('appUserId removed');
        console.log(this.checkUser.appUserId);
        this.navCtrlr.navigateForward('sign-in');
        return this.modalCtrlr.dismiss('delete my account', 'delete_account');
        
      }
      
    },(err)=>{
      this.api.hideLoading();
      console.log('Error: ',err);
      
    });
    
  }
}

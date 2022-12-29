import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  angForm:FormGroup;
  showPassword=false;
  getType='password';
  oldPasswordField= false;
  newPasswordField= false;
  confirmPasswordField= false;
  constructor(public location:Location,
    public navCtrlr:NavController,
    private fb:FormBuilder,
    public checkUser:CheckUserService,
    public api:ApiService) {
      this.createForm();
    }

  createForm(){
    this.angForm = this.fb.group({
      oldPwd:['',Validators.required],
      newPwd:['',Validators.required],
      cnfrmNewPwd:['',Validators.required]
    })
  }
  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  toggleGetType(){
    if(this.getType == 'password'){
      this.getType = 'text';
      this.showPassword = true;
    }else{
      this.getType = 'password';
      this.showPassword = false;
    }
  }
  activate(val){
    if(val == 'old_pwd'){
      this.oldPasswordField = true;
      this.newPasswordField= false;
      this.confirmPasswordField= false;
    }
    else if(val == 'new_pwd'){
      this.oldPasswordField = false;
      this.newPasswordField= true;
      this.confirmPasswordField= false;
    }
    else if(val == 'confirm_new_pwd'){
      this.oldPasswordField = false;
      this.newPasswordField= false;
      this.confirmPasswordField= true;
    }
    else{

    }
  }
  updatePassword(){
    this.oldPasswordField = false;
    this.newPasswordField= false;
    this.confirmPasswordField= false;
    let data = {
      user_id: this.checkUser.appUserId,
      oldPassword: this.angForm.value.oldPwd,
      newPassword: this.angForm.value.newPwd,
      confirmPassword: this.angForm.value.cnfrmNewPwd
    };
    this.api.showLoading();
    this.api.sendRequest('appUserChangePassword',data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log("res: ",res);
      if(res.status == 'success'){
        this.api.presentToast('Password Changed Successfully.')
        this.navCtrlr.navigateForward('settings');
      
      }else if(res.status == 'error'){

        this.api.presentToast(res.message);
      
      }else{

      }
      
    },(err)=>{
      this.api.hideLoading();
      console.log("Error: ",err);
      
    });
  }
}

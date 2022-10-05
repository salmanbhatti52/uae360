import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder ,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.page.html',
  styleUrls: ['./set-new-password.page.scss'],
})
export class SetNewPasswordPage implements OnInit {
  angForm: FormGroup;
  appUserId = localStorage.getItem('appUserId');

  showPassword=false;
  getType='password';
  newPasswordField= false;
  confirmPasswordField= false;
  constructor(public location:Location,
    public router:Router,
    public api:ApiService,
    private fb:FormBuilder) {
      this.createForm();
    }

  createForm(){
    this.angForm = this.fb.group({
      newPwd: ['',Validators.required],
      cnfrmNewPwd: ['',Validators.required]

    });
  }
  ngOnInit() {
    console.log(this.appUserId);
    
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
    if(val == 'new_pwd'){
      this.newPasswordField= true;
      this.confirmPasswordField= false;
    }
    else if(val == 'confirm_new_pwd'){
      this.newPasswordField= false;
      this.confirmPasswordField= true;
    }
    else{

    }
  }

  createPassword(){
    this.newPasswordField= false;
    this.confirmPasswordField= false;
    let data = {
      appUserId:this.appUserId,
      password:this.angForm.value.newPwd,
      confirm_password:this.angForm.value.cnfrmNewPwd
    }
    this.api.sendRequest('newPassword',data).subscribe((res:any)=>{
      console.log(res);
      if(res.status == 'success'){
        this.api.presentToast('Success!');
        this.router.navigate(['/sign-in']);
      }else if(res.status == 'error'){
        this.api.presentToast(res.message);
      }else{
        
      }
      
    },(err)=>{
      console.log(err);
      
    })
  }
}

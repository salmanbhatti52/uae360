import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder ,FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  angForm: FormGroup;
  
  userName = '';
  userNumber = '';
  email = '';
  password = '';
  number:any;
  getFocus=false;
  showPassword=false;
  getType='password';
  activateUserNameField = false;
  activateUserNumberField = false;
  activateEmailField= false;
  activatePasswordField= false;

  constructor(public  location:Location,
    public router:Router,
    public api:ApiService,
    private fb:FormBuilder) {
      this.createForm();
    }

  ngOnInit() {
  }
  createForm(){
    this.angForm = this.fb.group({
      name: ['',Validators.required],
      number: ['',Validators.required],
      email: ['',Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      password: ['',Validators.required]

    });
  }
  // =======================international phone input code =====================
  // onCountryChange(event){

  //   console.log(event.dialCode);
  //   console.log(event.name);
  //   console.log(event.iso2);
  //   }
  //   telInputObject(obj) {
  //     console.log('testing')
  //     console.log(obj);
  //     obj.setCountry('ae');
  //     console.log(obj.s.dialCode);
      
  //   }
  //   hasError(err){
  //     console.log(err);
  //   }
  //   getNumber(number){
  //     console.log(number);
  //     this.number = number;

  //   }
  //   focus(){
  //     this.getFocus=true;
  //   }
  // ===========================done========================================
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
    if(val == 'userName'){
      this.activateUserNameField=true;
      this.activateEmailField= false;
      this.activatePasswordField= false;
      this.activateUserNumberField = false;
      // this.getFocus = false;
    }else if(val == 'phoneNumber'){
      // this.getFocus = true;
      this.activateEmailField= false;
      this.activateUserNameField = false;
      this.activatePasswordField= false;
      this.activateUserNumberField= true;
      
    }
    else if(val == 'email'){
      this.activateEmailField= true;
      this.activateUserNameField = false;
      this.activatePasswordField= false;
      this.activateUserNumberField= false;
      // this.getFocus = false;
    }
    else if(val == 'pwd'){
      this.activatePasswordField= true;
      this.activateEmailField= false;
      this.activateUserNameField = false;
      this.activateUserNumberField= false;
      // this.getFocus = false;
    }
    else{

    }
  }
  gotoSignIn(){
   
    
    this.router.navigate(['/sign-in']);
  }
  gotoVerifyPhoneOtp(){
    this.activateUserNameField = false;
    this.activateUserNumberField = false;
    this.activateEmailField= false;
    this.activatePasswordField= false;
    console.log(this.angForm.value.name);
    console.log(this.angForm.value.number);
    console.log(this.angForm.value.email);
    console.log(this.angForm.value.password);
    let data  = {
      username:this.userName,
      phone:this.userNumber,
      email:this.email,
      password:this.password
    }
    this.api.sendRequest('signupHereNow',data).subscribe((res:any)=>{
      console.log(res);
      
    })
    // this.router.navigate(['/verify-phone-by-otp']);
  }
}

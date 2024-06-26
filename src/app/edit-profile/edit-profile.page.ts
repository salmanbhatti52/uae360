import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { ApiService } from '../services/api.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { CheckUserService } from '../check-user.service';
import { ModalController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  angForm: FormGroup;
  fName = '';
  lName = '';
  userProfile = '';
  userEmail = '';
  userAbout = '';
  userLocation = '';
  phoneNumber = '';
  dateofbirth = '';
  userNationality = ''
  firstName = false;
  lastName = false;
  about = false;
  email = false;
  address = false;
  num = false;
  birthdate = false;
  base64String: string;
  showPicker = false;
  nationval = false;
  dateformat;
  isModalOpen = false;
  term: any;
  constructor(public location: Location,
    public navCtrlr: NavController,
    public api: ApiService,
    public checkUser: CheckUserService,
    private fb: FormBuilder,
    public modalCtrl: ModalController) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      fName: [],
      lName: [],
      about: [],
      email: ['', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      location: [],
      number: [],
      dob: [],
      nationality: []
    });
  }

  ngOnInit() {


    console.log(this.api.localUserData);
    // ================
    const str = this.api.localUserData.username;
    const strArray = str.split(' ');
    console.log(strArray);
    if (strArray.length == 3) {
      this.fName = strArray[0];
      this.lName = `${strArray[1]} ${strArray[2]}`;
    }
    else if (strArray.length == 2) {
      this.fName = strArray[0];
      this.lName = strArray[1];

    } else if (strArray.length == 1) {
      this.fName = strArray[0];
    } else {

    }
    this.userProfile = this.api.localUserData.profile_pic;

    if (this.api.localUserData.account_type == 'SignupWithApp') {
      this.userProfile = `${this.api.imageUrlString}${this.userProfile}`
    }

    this.userEmail = this.api.localUserData.email;
    this.userAbout = this.api.localUserData.about;
    this.userLocation = this.api.localUserData.location;
    if (this.userLocation == null) {
      this.userLocation = '';
    } else {
      this.userLocation = this.api.localUserData.location;
    }
    if (this.phoneNumber == undefined || this.phoneNumber == '') {
      this.phoneNumber = '';
    } else {
      this.phoneNumber = this.api.localUserData.number;
    }
    if (this.dateofbirth == undefined || this.dateofbirth == '') {
      this.dateofbirth = '';
    } else {
      this.dateofbirth = this.api.localUserData.dob
    }
    if (this.userNationality == undefined || this.userNationality == '') {
      this.userNationality = '';
    }
    else {
      this.userNationality = this.api.localUserData.nationality
    }
    if (this.userAbout == null || this.userAbout == '') {
      this.userAbout = '';
    }
    else {
      this.userAbout = this.api.localUserData.about
    }
    if (this.userLocation == null || this.userLocation == '') {
      this.userLocation == this.api.fetchLocation;
    }



    this.angForm.setValue({
      fName: this.fName,
      lName: this.lName,
      about: this.userAbout,
      email: this.userEmail,
      location: this.userLocation,
      number: this.phoneNumber,
      dob: this.dateofbirth,
      nationality: this.userNationality
    });
    // expected output: Array ["The quick brown fox jumps over the lazy dog."]
    // ====================
  }
  goBack() {
    this.location.back();
  }
  activate(val) {
    if (val == 'first_name') {
      this.firstName = true;
      this.lastName = false;
      this.about = false;
      this.email = false;
      this.address = false;
    }
    else if (val == 'last_name') {
      this.firstName = false;
      this.lastName = true;
      this.about = false;
      this.email = false;
      this.address = false;
    }
    else if (val == 'about') {
      this.firstName = false;
      this.lastName = false;
      this.about = true;
      this.email = false;
      this.address = false;
    }
    else if (val == 'email') {
      this.firstName = false;
      this.lastName = false;
      this.about = false;
      this.email = true;
      this.address = false;
    }
    else if (val == 'address') {
      this.firstName = false;
      this.lastName = false;
      this.about = false;
      this.email = false;
      this.address = true;
    }
    else if (val == 'num') {
      this.firstName = false;
      this.lastName = false;
      this.about = false;
      this.email = false;
      this.address = false;
      this.num = true;
    }
    else if (val == 'num') {
      this.firstName = false;
      this.lastName = false;
      this.about = false;
      this.email = false;
      this.address = false;
      this.num = false;
      this.birthdate = true;
    } else if (val == 'nationval') {
      this.firstName = false;
      this.lastName = false;
      this.about = false;
      this.email = false;
      this.address = false;
      this.birthdate = false;
      this.nationval = true;
    }
    else {

    }
  }
  dateChanged(value) {
    console.log('date value', value);
    const dateObj = new Date(value);

    // Format the date as "DD-MM-YYYY"
    // Note: getMonth() returns 0 for January, 1 for February, etc., so we add 1.
    this.dateofbirth = `${dateObj.getFullYear().toString().padStart(2, '0')}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${dateObj.getDate()}`;
    // this.formattedString = format(parseISO(value), ' MMM d, yyyy')
    this.showPicker = false;
  }
  showPickerDate() {
    this.showPicker = true;
  }
  async addNewProfile() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt
    });
    console.log(image.base64String);
    this.userProfile = `data:image/jpeg;base64,${image.base64String}`
    this.base64String = image.base64String;
  }

  updateProfile() {
    this.firstName = false;
    this.lastName = false;
    this.about = false;
    this.email = false;
    this.address = false;
    this.num = false;
    this.nationval = false;
    this.birthdate = false;
    let data = {
      username: `${this.angForm.value.fName} ${this.angForm.value.lName}`,
      email: this.angForm.value.email,
      location: this.angForm.value.location,
      about: this.angForm.value.about,
      user_id: this.checkUser.appUserId,
      profile: this.base64String,
      birth_date: this.angForm.value.dob,
      nationality: this.angForm.value.nationality,
      phone: this.angForm.value.number
    }
    console.log(this.angForm.value.fName + " " + this.angForm.value.lName);
    console.log("email: ", this.angForm.value.email);
    console.log("location: ", this.angForm.value.location);
    console.log("about: ", this.angForm.value.about);
    console.log("appUserId: ", this.checkUser.appUserId);
    console.log("appUserId: ", this.checkUser.appUserId);
    console.log("dob: ", this.angForm.value.dob);

    this.api.showLoading();
    this.api.sendRequest('updateAppUserProfile', data).subscribe((res: any) => {
      this.api.hideLoading();
      console.log('Updat Profile Res: ', res);
      if (res.status == 'success') {
        this.api.presentToast('Success!')
        this.api.localUserData.username = res.data[0].username;
        this.api.localUserData.about = res.data[0].about;
        this.api.localUserData.profile_pic = res.data[0].profile_pic;
        this.api.localUserData.email = res.data[0].email;
        this.api.localUserData.location = res.data[0].location;
        this.api.localUserData.number = res.data[0].phone;
        this.api.localUserData.dob = res.data[0].birth_date;
        this.api.localUserData.nationality = res.data[0].nationality;
        console.log('api Local User Data: ', this.api.localUserData);
        localStorage.setItem('localUserData', JSON.stringify(this.api.localUserData));
        this.navCtrlr.navigateForward('settings');
      } else if (res.status == 'error') {
        // console.log("Error: ",);
        this.api.hideLoading();

      } else {

      }

    }, (err) => {
      console.log("Error: ", err);
      this.api.hideLoading();
    })

  }

  openmodal() {

    this.isModalOpen = true
  }
  closemodal(val: any) {
    console.log(val);
    this.userNationality = val.Nationality
    this.modal.dismiss()
    this.isModalOpen = false
  }


}

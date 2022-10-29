import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SelectDatePage } from '../select-date/select-date.page';
import { SelectTimePage } from '../select-time/select-time.page';
import { Location } from '@angular/common';
import { ApiService } from '../services/api.service';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { CheckUserService } from '../check-user.service';
import { format, parseISO} from 'date-fns';
// import { format,parseISO} from 'date-fns';
const IMAGE_DIR = 'stored-image'
interface LocalFile {
  name : string;
  path : string;
  data : string;
}

@Component({
  selector: 'app-car-booking',
  templateUrl: './car-booking.page.html',
  styleUrls: ['./car-booking.page.scss'],
})
export class CarBookingPage implements OnInit {
image: LocalFile [] = [];
startDate:any; 
endDate:any;
startTime:any; 
endTime:any;
carData = [];
datesArray = [];
base64Image = '';
imageURL:any = 'assets/images/upload_license_img.svg';

carId: any;
  
  constructor(public modalCtrlr:ModalController,
    public location:Location,
    public navCtrlr:NavController,
    public api:ApiService,
    public alertCtrlr:AlertController,
    public checkUser:CheckUserService) { }

  ngOnInit() {
    console.log(this.startDate);
    let carData = this.api.carDataById;
    console.log('Car Data:',carData);
    this.carData = carData;
    console.log('licenseImage',this.imageURL);  
    this.loadFiles();
    if(carData != undefined){
      for(let data of carData){
        this.carId = data.car_id 
      }
    }
    console.log('car_id',this.carId);
    
    this.checkBooking();
  }

  checkBooking(){
    let data = {
      appuser_id:this.checkUser.appUserId,
      car_id:this.carId,
    };
    console.log('Data: ',data);
    
    this.api.sendRequest('getCarsBooking',data).subscribe((res:any)=>{
      
      if(res.status=='success'){
        console.log('Api Response: ',res);
        let booked = res.data;
        console.log('Booked Array: ',booked);
        
        for(let rec of booked){
          
          // let startDate = rec.start_date;
          // let endDate = rec.end_date;
          // let stDate = format(parseISO(new Date(startDate).toISOString()),'yyyy-MM-dd');
          // let ndDate = format(parseISO(new Date(endDate).toISOString()),'yyyy-MM-dd');
          // console.log('Booked Car start_Date: ',stDate);
          // console.log('Booked Car end_Date: ',ndDate);
          this.datesArray.push(rec.start_date);
          this.datesArray.push(rec.end_date);
          
        }
        console.log('DatesArray: ',this.datesArray);
        this.api.datesToDisable = this.datesArray;
        
      }else if(res.status=='error'){
        console.log('Error: ',res);
      }else{

      }
      
    },(err)=>{
      console.log('error: ',err);
      
    });
    
  }

  async loadFiles(){
    // this.image = [];
    this.api.showLoading();
    await Filesystem.readdir({
      directory: Directory.Data,
      path:IMAGE_DIR
    }).then(result =>{
      console.log('Files on load: ',result);
      this.readFile(result.files);
    },(err)=>{
      console.log(err);
      Filesystem.mkdir({
        directory: Directory.Data,
        path: IMAGE_DIR
      });
      console.log("New Folder Created");
      

    }).then(_=>{
      this.api.hideLoading();
    })
  }

  async readFile(files){
    console.log('Files Detail: ',files);
    for(let f of files){
      const filePath = `${IMAGE_DIR}/${f.name}`
      const fileData = await Filesystem.readFile({
        directory: Directory.Data,
        path: filePath
      });
      console.log('File Read :', fileData);
      this.imageURL = `data:image/jpeg;base64,${fileData.data}`;
      // this.image.push({
      //   name: f.name,
      //   path: filePath,
      //   data: `data:image/jpeg;base64,${fileData.data}`
      // });
    }
  }
  goBack(){
    this.location.back();
  }
  async openDateModal(dateVal){
    const modal = await this.modalCtrlr.create({
      component: SelectDatePage,
      showBackdrop:true,
      cssClass:'date_modal',
    });
    modal.present();
    const {data, role} = await modal.onWillDismiss();
    if(role === 'dateSelected'){
      console.log(data);
      if(dateVal == 'startDate'){
        this.startDate = data;
        console.log('startDate==',this.startDate);
      }
      else if( dateVal == 'endDate'){
        this.endDate = data;
        console.log('endDate==',this.endDate);
      }
      else{

      }
      
      
    }
  }
  async openTimeModal(timeVal){
    const modal = await this.modalCtrlr.create({
      component: SelectTimePage,
      showBackdrop: true,
      cssClass: 'time_modal',
    });
    modal.present();

    const {data, role} = await modal.onWillDismiss();
    if (role === 'timeSelected'){
      console.log(data);
      if(timeVal == 'startTime'){
        this.startTime = data;
        console.log('startTime==',this.startTime);
      }
      else if( timeVal == 'endTime'){
        this.endTime = data;
        console.log('endTime==',this.endTime);
      }
      else{
        
      }
      
    }
  }

  async addLicense(){
    // const alert  = await this.alertCtrlr.create({
    //   header: 'Choose From',
    //   buttons: [
    //     {
    //       text: 'Camera',
    //       role: 'camera',
    //       handler: ()=>{
            
    //       },
    //     },
    //     {
    //       text: 'Gallery',
    //       role: 'upload',
    //       handler: ()=>{
           
    //      },
    //     },
    //   ],
    // });
    // await alert.present();
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Prompt
    });
    console.log(image);
    // if(image.format == 'jpeg'){
      this.imageURL = image.dataUrl;
      this.readDir();
    // }else{
    //   this.api.presentToast("Please add image in 'JPEG' format.");
    // }
  }
  async readDir(){
    await Filesystem.readdir({
      directory: Directory.Data,
      path: IMAGE_DIR
    }).then(result =>{
      if(result.files.length==0){
        this.saveImage(this.imageURL);
        // this.loadFiles();
      }
      else if(result.files.length > 0){
        let fileName = ''
        for( let f of result.files){
          fileName = `${IMAGE_DIR}/${f.name}`;
        } 
        console.log('fileName: ',fileName);
        
          Filesystem.deleteFile({
            directory: Directory.Data,
            path: fileName
          });
        this.saveImage(this.imageURL);
        // this.loadFiles()
      }else{

      }
      
    });
  }
  async saveImage(base64Image){
    
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      directory: Directory.Data,
      path: `${IMAGE_DIR}/${fileName}`,
      data: base64Image
    });
    console.log('File Saved: ',savedFile);
    
  }
  
  // async deleteFiles(files){
  //   .then(result => {
  //       console.log(result);
        
  //     });
    
      
    
  //   console.log('files deleted');
    
    
  //   // console.log(files);
  // }

  showSummary(){
    
    localStorage.setItem('startDate',this.startDate);
    localStorage.setItem('endDate',this.endDate);
    localStorage.setItem('startTime',this.startTime);
    localStorage.setItem('endTime',this.endTime);
    console.log(localStorage.getItem('startDate'));
    console.log(localStorage.getItem('endDate'));
    console.log(localStorage.getItem('startTime'));
    console.log(localStorage.getItem('endTime'));
    
    this.navCtrlr.navigateRoot('summary');
  }
}

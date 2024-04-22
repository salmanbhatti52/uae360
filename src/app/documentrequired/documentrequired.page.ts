import { Component, OnInit } from '@angular/core';
import { CheckUserService } from '../check-user.service';
import { Location } from '@angular/common';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-documentrequired',
  templateUrl: './documentrequired.page.html',
  styleUrls: ['./documentrequired.page.scss'],
})
export class DocumentrequiredPage implements OnInit {
  carId: any;
  documentdata: any;
  uaeResidentsDocs = [];
  touristDocs = [];
  msgshow: any;
  errorshow = false;
  constructor(public checkUser: CheckUserService,
    public location: Location,
    public api: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.carId = this.route.snapshot.params['carId'];
    this.getdocument(this.carId)
  }

  goBack() {
    this.location.back();
  }

  getdocument(carId) {
    let data = {
      car_id: carId,
    }
    this.api.showLoading();
    this.api.sendRequest('get_cars_documents', data).subscribe((res: any) => {
      this.api.hideLoading();
      console.log('api response:', res);
      if (res.status == 'success') {
        this.documentdata = res.data
        this.documentdata.forEach(doc => {
          if (doc.documents_requirements.name === 'For UAE Residents') {
            this.uaeResidentsDocs.push(doc);
          } else if (doc.documents_requirements.name === 'For Tourists') {
            this.touristDocs.push(doc);
          }
        });
      } else {
        this.errorshow = true;
        this.msgshow = res.message
      }


    }, (err) => {
      this.api.hideLoading();
      console.log(err);

    })
  }

}

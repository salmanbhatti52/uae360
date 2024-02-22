import { Component, OnInit } from '@angular/core';
import { CheckUserService } from '../check-user.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-documentrequired',
  templateUrl: './documentrequired.page.html',
  styleUrls: ['./documentrequired.page.scss'],
})
export class DocumentrequiredPage implements OnInit {

  constructor(public checkUser: CheckUserService,
    public location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}

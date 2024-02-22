import { Component, OnInit } from '@angular/core';
import { CheckUserService } from '../check-user.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-deliveryterms',
  templateUrl: './deliveryterms.page.html',
  styleUrls: ['./deliveryterms.page.scss'],
})
export class DeliverytermsPage implements OnInit {
  public rows = [
    { city: "Abu Dhabi", dcharge: "AED 500", pcharge: "" },
    { city: "Ras Al Khaimah", dcharge: "AED 300", pcharge: "" },
    { city: "Fujairah", dcharge: "AED 400", pcharge: "" },
    { city: "Sharjah", dcharge: "AED 100", pcharge: "" }
  ];
  constructor(public location: Location,
    public checkUser: CheckUserService) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}

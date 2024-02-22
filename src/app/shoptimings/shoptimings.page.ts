import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CheckUserService } from '../check-user.service';
@Component({
  selector: 'app-shoptimings',
  templateUrl: './shoptimings.page.html',
  styleUrls: ['./shoptimings.page.scss'],
})
export class ShoptimingsPage implements OnInit {
  timings = [
    { "day": "Sunday", "timing": "10:30 AM - 7:30 PM" },
    { "day": "Monday", "timing": "9:00 AM - 5:00 PM" },
    { "day": "Tuesday", "timing": "9:00 AM - 5:00 PM" },
    { "day": "Wednesday", "timing": "9:00 AM - 5:00 PM" },
    { "day": "Thursday", "timing": "9:00 AM - 5:00 PM" },
    { "day": "Friday", "timing": "9:00 AM - 5:00 PM" },
    { "day": "Saturday", "timing": "9:00 AM - 5:00 PM" }
  ]

  constructor(public location: Location,
    public checkUser: CheckUserService) { }

  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }

}

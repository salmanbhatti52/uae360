import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.page.html',
  styleUrls: ['./ratings.page.scss'],
})
export class RatingsPage implements OnInit {

  constructor(public location:Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}

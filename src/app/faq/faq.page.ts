import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  faqs: any;
  openStates: boolean[] = [];
  openAccordionIndex: number | null = null;
  constructor(public location: Location,
    public checkUser: CheckUserService,
    public api: ApiService) { }

  ngOnInit() {
    this.getfaqs();
  }

  goBack() {
    this.location.back();
  }

  getfaqs() {
    let data = {
      "users_company_id": "1"
    };
    this.api.showLoading();
    this.api.sendRequest('get_company_faqs', data).subscribe((res: any) => {
      this.api.hideLoading();
      console.log('get_company_faqs Api Response: ', res);
      if (res.status == 'success') {
        this.faqs = res.data

      } else if (res.status == 'error') {

      }

    }, (err) => {
      this.api.hideLoading();
      console.log('Error', err);

    });
  }

  toggleAccordion(index: number) {
    // Convert to Number if index comes as a String
    const numericIndex = Number(index);
    console.log(`Toggling accordion at index: ${numericIndex}`);

    // Check if the same index is clicked again to close it
    if (this.openAccordionIndex === numericIndex) {
      this.openAccordionIndex = null;
    } else {
      this.openAccordionIndex = numericIndex;
    }
    console.log(`New openAccordionIndex: ${this.openAccordionIndex}`);
  }

  isOpen(index: number): boolean {
    // Ensure comparison is done correctly by converting index to the expected data type
    return this.openAccordionIndex === index;
  }


}

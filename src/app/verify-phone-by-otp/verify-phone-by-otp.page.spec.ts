import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyPhoneByOtpPage } from './verify-phone-by-otp.page';

describe('VerifyPhoneByOtpPage', () => {
  let component: VerifyPhoneByOtpPage;
  let fixture: ComponentFixture<VerifyPhoneByOtpPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyPhoneByOtpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyPhoneByOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

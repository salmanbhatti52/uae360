import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GiveRatingsPopupPage } from './give-ratings-popup.page';

describe('GiveRatingsPopupPage', () => {
  let component: GiveRatingsPopupPage;
  let fixture: ComponentFixture<GiveRatingsPopupPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveRatingsPopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GiveRatingsPopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

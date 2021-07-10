import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsappContactUsComponent } from './newsapp-contact-us.component';

describe('NewsappContactUsComponent', () => {
  let component: NewsappContactUsComponent;
  let fixture: ComponentFixture<NewsappContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsappContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsappContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

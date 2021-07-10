import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsappHomeComponent } from './newsapp-home.component';

describe('NewsappHomeComponent', () => {
  let component: NewsappHomeComponent;
  let fixture: ComponentFixture<NewsappHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsappHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsappHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

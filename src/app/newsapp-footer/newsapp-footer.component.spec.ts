import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsappFooterComponent } from './newsapp-footer.component';

describe('NewsappFooterComponent', () => {
  let component: NewsappFooterComponent;
  let fixture: ComponentFixture<NewsappFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsappFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsappFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

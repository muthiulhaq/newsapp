import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsappHeaderComponent } from './newsapp-header.component';

describe('NewsappHeaderComponent', () => {
  let component: NewsappHeaderComponent;
  let fixture: ComponentFixture<NewsappHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsappHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsappHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

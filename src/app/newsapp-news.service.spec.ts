import { TestBed } from '@angular/core/testing';

import { NewsappNewsService } from './newsapp-india-news.service';

describe('NewsappNewsService', () => {
  let service: NewsappNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsappNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

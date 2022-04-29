import { TestBed } from '@angular/core/testing';

import { AshuSirService } from './ashu-sir.service';

describe('AshuSirService', () => {
  let service: AshuSirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AshuSirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

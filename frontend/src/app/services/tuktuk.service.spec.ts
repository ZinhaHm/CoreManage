import { TestBed } from '@angular/core/testing';

import { TuktukService } from './tuktuk.service';

describe('TuktukService', () => {
  let service: TuktukService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuktukService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { WatchmenService } from './watchmen.service';

describe('WatchmenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WatchmenService = TestBed.get(WatchmenService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RealtiesService } from './realties.service';

describe('RealtiesService', () => {
  let service: RealtiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealtiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

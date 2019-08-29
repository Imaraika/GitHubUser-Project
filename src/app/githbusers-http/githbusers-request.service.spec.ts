import { TestBed } from '@angular/core/testing';

import { GithbusersRequestService } from './githbusers-request.service';

describe('GithbusersRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithbusersRequestService = TestBed.get(GithbusersRequestService);
    expect(service).toBeTruthy();
  });
});

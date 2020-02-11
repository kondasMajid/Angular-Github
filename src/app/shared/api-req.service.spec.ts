import { TestBed } from '@angular/core/testing';

import { ApiReqService } from './api-req.service';

describe('ApiReqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiReqService = TestBed.get(ApiReqService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DigitalAssetApiService } from './digital-asset-api.service';

describe('DigitalAssetApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DigitalAssetApiService = TestBed.get(DigitalAssetApiService);
    expect(service).toBeTruthy();
  });
});

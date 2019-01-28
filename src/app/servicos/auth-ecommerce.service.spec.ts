import { TestBed } from '@angular/core/testing';

import { AuthEcommerceService } from './auth-ecommerce.service';

describe('AuthEcommerceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthEcommerceService = TestBed.get(AuthEcommerceService);
    expect(service).toBeTruthy();
  });
});

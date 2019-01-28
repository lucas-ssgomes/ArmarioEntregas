import { TestBed, async, inject } from '@angular/core/testing';

import { AuthEcommerceGuard } from './auth-ecommerce.guard';

describe('AuthEcommerceGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthEcommerceGuard]
    });
  });

  it('should ...', inject([AuthEcommerceGuard], (guard: AuthEcommerceGuard) => {
    expect(guard).toBeTruthy();
  }));
});

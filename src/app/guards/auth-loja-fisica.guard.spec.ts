import { TestBed, async, inject } from '@angular/core/testing';

import { AuthLojaFisicaGuard } from './auth-loja-fisica.guard';

describe('AuthLojaFisicaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthLojaFisicaGuard]
    });
  });

  it('should ...', inject([AuthLojaFisicaGuard], (guard: AuthLojaFisicaGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { AuthLojaFisicaService } from './auth-loja-fisica.service';

describe('AuthLojaFisicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthLojaFisicaService = TestBed.get(AuthLojaFisicaService);
    expect(service).toBeTruthy();
  });
});

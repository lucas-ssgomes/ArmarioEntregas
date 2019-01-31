import { TestBed } from '@angular/core/testing';

import { AuthAdmService } from './auth-adm.service';

describe('AuthAdmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthAdmService = TestBed.get(AuthAdmService);
    expect(service).toBeTruthy();
  });
});

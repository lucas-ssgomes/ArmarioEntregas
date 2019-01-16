import { TestBed } from '@angular/core/testing';

import { DbService } from './db.service';

describe('DbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('deve estar criado', () => {
    const service: DbService = TestBed.get(DbService);
    expect(service).toBeTruthy();
  });
});

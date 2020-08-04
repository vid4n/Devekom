import { TestBed } from '@angular/core/testing';

import { KabloviService } from './kablovi.service';

describe('KabloviService', () => {
  let service: KabloviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KabloviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

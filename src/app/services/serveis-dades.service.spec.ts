import { TestBed } from '@angular/core/testing';

import { ServeisDadesService } from './serveis-dades.service';

describe('ServeisDadesService', () => {
  let service: ServeisDadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeisDadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { LocalSessionService } from './local-session.service';

describe('LocalSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalSessionService]
    });
  });

  it('should be created', inject([LocalSessionService], (service: LocalSessionService) => {
    expect(service).toBeTruthy();
  }));
});

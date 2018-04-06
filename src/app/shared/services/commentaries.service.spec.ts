import { TestBed, inject } from '@angular/core/testing';

import { CommentariesService } from './commentaries.service';

describe('CommentariesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentariesService]
    });
  });

  it('should be created', inject([CommentariesService], (service: CommentariesService) => {
    expect(service).toBeTruthy();
  }));
});

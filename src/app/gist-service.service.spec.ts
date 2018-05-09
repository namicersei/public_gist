import { TestBed, inject } from '@angular/core/testing';

import { GistServiceService } from './gist-service.service';

describe('GistServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GistServiceService]
    });
  });

  it('should be created', inject([GistServiceService], (service: GistServiceService) => {
    expect(service).toBeTruthy();
  }));
});

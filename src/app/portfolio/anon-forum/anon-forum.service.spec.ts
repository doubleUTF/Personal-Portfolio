import { TestBed, inject } from '@angular/core/testing';

import { AnonForumService } from './anon-forum.service';

describe('AnonForumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnonForumService]
    });
  });

  it('should be created', inject([AnonForumService], (service: AnonForumService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ThreadListResolverService } from './thread-list-resolver.service';

describe('ThreadListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreadListResolverService]
    });
  });

  it('should be created', inject([ThreadListResolverService], (service: ThreadListResolverService) => {
    expect(service).toBeTruthy();
  }));
});

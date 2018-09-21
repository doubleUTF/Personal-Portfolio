import { TestBed, async, inject } from '@angular/core/testing';

import { IssueGuard } from './issue.guard';

describe('IssueGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueGuard]
    });
  });

  it('should ...', inject([IssueGuard], (guard: IssueGuard) => {
    expect(guard).toBeTruthy();
  }));
});

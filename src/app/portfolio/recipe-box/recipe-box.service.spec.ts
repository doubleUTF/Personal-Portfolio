import { TestBed, inject } from '@angular/core/testing';

import { RecipeBoxService } from './recipe-box.service';

describe('RecipeBoxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeBoxService]
    });
  });

  it('should be created', inject([RecipeBoxService], (service: RecipeBoxService) => {
    expect(service).toBeTruthy();
  }));
});

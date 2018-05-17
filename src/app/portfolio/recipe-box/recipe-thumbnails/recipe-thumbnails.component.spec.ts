import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeThumbnailsComponent } from './recipe-thumbnails.component';

describe('RecipeThumbnailsComponent', () => {
  let component: RecipeThumbnailsComponent;
  let fixture: ComponentFixture<RecipeThumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeThumbnailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

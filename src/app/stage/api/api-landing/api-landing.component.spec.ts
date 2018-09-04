import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiLandingComponent } from './api-landing.component';

describe('ApiLandingComponent', () => {
  let component: ApiLandingComponent;
  let fixture: ComponentFixture<ApiLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

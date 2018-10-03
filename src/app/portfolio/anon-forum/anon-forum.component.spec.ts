import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonForumComponent } from './anon-forum.component';

describe('AnonForumComponent', () => {
  let component: AnonForumComponent;
  let fixture: ComponentFixture<AnonForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnonForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

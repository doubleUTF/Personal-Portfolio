import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamperLeaderboardComponent } from './camper-leaderboard.component';

describe('CamperLeaderboardComponent', () => {
  let component: CamperLeaderboardComponent;
  let fixture: ComponentFixture<CamperLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamperLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamperLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

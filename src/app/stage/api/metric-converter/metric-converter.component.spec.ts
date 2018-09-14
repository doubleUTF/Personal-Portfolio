import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricConverterComponent } from './metric-converter.component';

describe('MetricConverterComponent', () => {
  let component: MetricConverterComponent;
  let fixture: ComponentFixture<MetricConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

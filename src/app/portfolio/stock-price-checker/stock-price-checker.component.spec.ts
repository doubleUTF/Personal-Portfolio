import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPriceCheckerComponent } from './stock-price-checker.component';

describe('StockPriceCheckerComponent', () => {
  let component: StockPriceCheckerComponent;
  let fixture: ComponentFixture<StockPriceCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockPriceCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPriceCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

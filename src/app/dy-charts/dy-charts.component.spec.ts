import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyChartsComponent } from './dy-charts.component';

describe('DyChartsComponent', () => {
  let component: DyChartsComponent;
  let fixture: ComponentFixture<DyChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DyChartsComponent]
    });
    fixture = TestBed.createComponent(DyChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

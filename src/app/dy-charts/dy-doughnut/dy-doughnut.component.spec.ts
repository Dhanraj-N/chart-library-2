import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyDoughnutComponent } from './dy-doughnut.component';

describe('DyDoughnutComponent', () => {
  let component: DyDoughnutComponent;
  let fixture: ComponentFixture<DyDoughnutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DyDoughnutComponent]
    });
    fixture = TestBed.createComponent(DyDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

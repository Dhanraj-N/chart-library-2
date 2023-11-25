import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyBarComponent } from './dy-bar.component';

describe('DyBarComponent', () => {
  let component: DyBarComponent;
  let fixture: ComponentFixture<DyBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DyBarComponent]
    });
    fixture = TestBed.createComponent(DyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

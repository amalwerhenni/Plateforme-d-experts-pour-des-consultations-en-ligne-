import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpDashComponent } from './exp-dash.component';

describe('ExpDashComponent', () => {
  let component: ExpDashComponent;
  let fixture: ComponentFixture<ExpDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpDashComponent]
    });
    fixture = TestBed.createComponent(ExpDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

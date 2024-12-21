import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsDashComponent } from './us-dash.component';

describe('UsDashComponent', () => {
  let component: UsDashComponent;
  let fixture: ComponentFixture<UsDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsDashComponent]
    });
    fixture = TestBed.createComponent(UsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

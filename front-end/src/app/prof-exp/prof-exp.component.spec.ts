import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfExpComponent } from './prof-exp.component';

describe('ProfExpComponent', () => {
  let component: ProfExpComponent;
  let fixture: ComponentFixture<ProfExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfExpComponent]
    });
    fixture = TestBed.createComponent(ProfExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

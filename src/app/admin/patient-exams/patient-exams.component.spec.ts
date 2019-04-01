import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientExamsComponent } from './patient-exams.component';

describe('PatientExamsComponent', () => {
  let component: PatientExamsComponent;
  let fixture: ComponentFixture<PatientExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

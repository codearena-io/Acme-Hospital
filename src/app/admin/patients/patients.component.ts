import { Component, OnInit } from '@angular/core';
import { Patient, PatientService } from '../../patient.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patients$: Observable<Patient[]>;

  displayedColumns: string[] = ['name', 'surname', 'gender', 'action'];

  constructor(private patientService: PatientService) {    
  }

  ngOnInit() {
    this.patients$ = this.patientService.getAll();
  }
}

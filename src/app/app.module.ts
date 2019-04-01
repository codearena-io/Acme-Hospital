import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatientsComponent } from './admin/patients/patients.component';
import { PatientFormComponent } from './admin/patient-form/patient-form.component';
import { PatientExamsComponent } from './admin/patient-exams/patient-exams.component';
import { ExamFormComponent } from './admin/exam-form/exam-form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PatientsComponent,
    PatientFormComponent,
    PatientExamsComponent,
    ExamFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,   
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule,
    MatDatepickerModule,
    MatMomentDateModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },      
      { path: 'admin/patients', component: PatientsComponent, canActivate: [AuthGuard] },
      { path: 'admin/patients/new', component: PatientFormComponent, canActivate: [AuthGuard] },
      { path: 'admin/patients/:id', component: PatientFormComponent, canActivate: [AuthGuard] },
      { path: 'admin/patients/:patientId/exams', component: PatientExamsComponent, canActivate: [AuthGuard] },
      { path: 'admin/patients/:patientId/exams/new', component: ExamFormComponent, canActivate: [AuthGuard] },
      { path: 'admin/patients/:patientId/exams/:id', component: ExamFormComponent, canActivate: [AuthGuard] },
      { path: '', component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

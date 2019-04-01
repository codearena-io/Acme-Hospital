import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private activatedRroute: ActivatedRoute, private router: Router) {
    this.user$ = afAuth.authState;
  }

  login(email: string, password: string) {
    let returnUrl = this.activatedRroute.snapshot.queryParamMap.get('returnUrl') || '/';

    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigateByUrl(returnUrl);
      })
      .catch(function (error) {        
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}

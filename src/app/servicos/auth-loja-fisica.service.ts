import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthLojaFisicaService {

  constructor(public afAuth: AngularFireAuth) { }

  loginEmail(email: string, senha: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, senha)
        .then(userData => resolve(userData),
        err => reject(err));
      });
  }

  isLoggedInLojaFisica() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public afAuth: AngularFireAuth) { }

  loginEmail(email: string, senha: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, senha)
        .then(userData => resolve(userData),
        err => reject(err));
      });
  }

  loginGoogle() {
  }

  logOut() {
    return this.afAuth.auth.signOut();
  }

  isLoggedIn(): any { }

  isLoggednInEcommerce(): any { }

  isLoggednInLojaFisica(): any {}

}

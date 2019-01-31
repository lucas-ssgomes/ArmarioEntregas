import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { auth } from 'firebase/app';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public afAuth: AngularFireAuth, public dbService: DbService) { }

  loginEmail(email: string, senha: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, senha)
        .then(userData => resolve(userData),
        err => reject(err));
      });
  }

  // Não está sendo usado e também não funciona
  loginGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  // Está apresentando erro ao sair do sistema em - login.component.ts
  logOut() {
    return this.afAuth.auth.signOut();
  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

}

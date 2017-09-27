import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  auth: any = null;

  constructor(private afAuth: AngularFireAuth) {
  }

  get authState() {
    return this.afAuth.authState;
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.auth = user
        this.updateUserData()
      })
      .catch(error => console.log(error));
  }

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.auth = user
        this.updateUserData()
      })
      .catch(error => console.log(error));
  } 

  logoutUser() {
    return this.afAuth.auth.signOut();
  }

  private updateUserData(): void {
    // Writes user name and email to realtime db
    // useful if your app displays information about users or for admin features
  
      // let path = `users/${this.currentUserId}`; // Endpoint on firebase
      // let data = {
      //               email: this.authState.email,
      //               name: this.authState.displayName
      //             }
  
      // this.db.object(path).update(data)
      // .catch(error => console.log(error));
  
    }

}

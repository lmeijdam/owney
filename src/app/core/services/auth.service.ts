import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { UserService } from 'app/core/services/user.service';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private userService: UserService) {
  }

  get uid() {
    return this.afAuth.auth.currentUser.uid;
  }

  get authState() {
    return this.afAuth.authState;
  }

  get isAuthenticated(): boolean {
    return this.authState !== null;
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((user) => this.userService.setUser(user))
    .catch(err => { throw new Error(err.message); });
  }

  register(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((user) => this.userService.register(user))
    .catch(err => { throw new Error(err.message); });
  }

  logout() {
    return this.afAuth.auth.signOut()
    .then(() => this.userService.setUser(null));
  }

}

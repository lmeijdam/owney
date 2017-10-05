import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { UserService } from 'app/core/services/user.service';
import { Store } from 'app/core/store';
import { User } from 'app/core/store';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthService {

  auth$ = this.authState
    .do(next => {
      if(!next) {
        this.store.reset();
        return;
      }
      this.store.set('user', this.createUser(next))
    });

  constructor(
    private afAuth: AngularFireAuth,
    private store: Store,
    private db: AngularFireDatabase
  ) {
  }

  get user() {
    return this.afAuth.auth.currentUser;
  }

  get authState() {
    return this.afAuth.authState;
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(err => { throw new Error(err.message); });
  }

  register(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => this.registerUser(user))
      .catch(err => { throw new Error(err.message); });
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  private createUser(userInfo?) {
    if (!userInfo) return null;
    return {
      email: userInfo.email,
      uid: userInfo.uid,
      authenticated: true
    };
  }

  private registerUser(user) {
    return this.db.object(`users/${user.uid}`).update({ email: user.email });
  }



}

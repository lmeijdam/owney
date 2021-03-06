import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';

export interface User {
    email: string,
    uid: string,
    authenticated: boolean
  }

export interface State {
  user: User,
  profile: any
}

const state: State = {
  user: undefined,
  profile: undefined
};

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().distinctUntilChanged();

  get value() {
    return this.subject.value;
  }

  get state() {
    return Observable.of(state);
  }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }

  reset() {
    this.set('user', null);
    this.set('profile', null);
  }

}
import { Injectable } from '@angular/core';
import { Store, User } from 'app/core/store';

@Injectable()
export class UserService {

    constructor(private store: Store) { }

    update(arg?): void {
        if (!arg) {
            this.store.set('user', null);
            return;
        }
        const user: User = {
            email: arg.email,
            uid: arg.uid,
            authenticated: true
        };
        this.store.set('user', user);

        // update or create database entity
        // updateUserInfo(arg)
    }

    updateUserInfo(user) {

    }
}
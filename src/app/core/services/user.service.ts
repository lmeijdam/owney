import { Injectable } from '@angular/core';
import { Store, User } from 'app/core/store';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserService {

    constructor(private store: Store, private db: AngularFireDatabase) { }

    setUser(data) {
        this.store.set('user', this.createUser(data));
    }

    get User() {
        return this.store.select('user');
    }

    register(user) {
        return this.db.object(`users/${user.uid}`).update({ email: user.email})
        .then(() => this.setUser(user));
    }

    get(uid) {
        if(uid === null) return null;
        return this.db.object(`users/${uid}`);
    }

    updateUserInfo(user){
        //return this.db.object(path).update(data);
    }

    getUserInfo(id) {
        this.db.object(`users/${id}`).subscribe(user => console.log(user));
    }

    private createUser(userInfo?) {
        if(!userInfo) return null;
        return {
            email: userInfo.email,
            uid: userInfo.uid,
            authenticated: true
        };
    }
}
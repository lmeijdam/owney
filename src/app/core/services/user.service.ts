import { Injectable } from '@angular/core';
import { Store, User } from 'app/core/store';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/core/services/auth.service';

@Injectable()
export class UserService {
    constructor(private store: Store,
        private db: AngularFireDatabase) { }

    register(user) {
        return this.db.object(`users/${user.uid}`).update({ email: user.email});
    }

    get(uid) {
        return this.db.object(`users/${uid}`);
    }

    updateUserInfo(user){
    }

    getUserInfo(id) {
        //this.db.object(`users/${id}`).subscribe(user => console.log(user));
    }
}
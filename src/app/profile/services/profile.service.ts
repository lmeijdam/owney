import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from 'app/core/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Store } from 'app/core/store';

@Injectable()
export class ProfileService {
    profile$: Observable<any[]> = this.db.object(`users/${this.uid}`)
    .do(next => {
        console.log(next);
        this.store.set('profile', next)
    });

    constructor(
        private db: AngularFireDatabase,
        private authService: AuthService,
        private store: Store
    ) { }

    get uid(){
        return this.authService.user.uid;
    }

    updateUser(user){
        return this.db.object(`users/${this.uid}`).update({ name: user.name });
    }
}
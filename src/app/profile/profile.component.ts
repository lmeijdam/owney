import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from 'app/core/services/user.service';
import { Observable } from 'rxjs/Observable';
import { User, Store } from 'app/core/store';
import { AuthService } from 'app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ProfileService } from 'app/profile/services/profile.service';

@Component({
    selector: 'profile',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
        <h2>Profile</h2>
        <profile-form 
            [data]="profile$ | async"
            (submitted)="onSubmit($event)"
            *ngIf="profile$ | async">
        </profile-form>
    </div>
    </div>
    `,
    providers: [ProfileService]
})

export class ProfileComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    profile$: Observable<any>;

    constructor(
        private profileService: ProfileService,
        private store: Store) { }

    ngOnInit() {
        this.profile$ = this.store.select<any>('profile');
        this.subscription = this.profileService.profile$.subscribe(next => console.log(next));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onSubmit($event) {
        this.profileService.updateUser($event);
    }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/core/services/user.service';
import { Observable } from 'rxjs/Observable';
import { User, Store } from 'app/core/store';

@Component({
    selector: 'home',
    template: `
    <div class="jumbotron" *ngIf="!(user$ | async)?.authenticated">
        <h1>Hey you!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc mattis ante imperdiet mi tempus, at tincidunt quam maximus. Aenean accumsan,
        mauris et cursus porttitor, nisi ex dictum turpis, sed tincidunt odio nisl et nunc. 
        Donec vitae elit magna. Aliquam tempor pharetra nunc at luctus. Curabitur sit amet
        tincidunt urna, ac dapibus tortor. Nam consectetur lacus metus, non tempus nulla 
        hendrerit at. Quisque lacinia risus eu sapien lobortis fringilla. Donec a ligula 
        id ex ornare ornare. Nulla luctus dui elit, sed tempor justo cursus vel. 
        Pellentesque a ex venenatis, luctus velit vitae, tincidunt ante. Curabitur 
        elementum arcu ac nibh malesuada faucibus. In hac habitasse platea dictumst.</p>
        <p><a class="btn btn-primary btn-lg" routerLink="/auth" role="button">Login</a>
        <a class="btn btn-primary btn-lg" routerLink="/auth/register" role="button">Register</a></p>
    </div>
    `
})

export class HomeComponent implements OnInit {
    user$: Observable<User>;
    constructor(private userService: UserService, private store: Store) { }

    ngOnInit() { 
        this.user$ = this.store.select('user');
    }
}
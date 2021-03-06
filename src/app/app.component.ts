import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { Router } from '@angular/router';
import { Store, User } from 'app/core/store';
import { Observable } from 'rxjs/Observable';
import { UserService } from 'app/core/services/user.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      </button>
        <a class="navbar-brand" routerLink="/">Owney</a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li><a *ngIf="!(user$ | async)?.authenticated" routerLink="/auth">Login</a></li>
          <li class="dropdown" *ngIf="(user$ | async)?.authenticated">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            {{ (user$ | async)?.email }} 
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li><a routerLink="/profile">Profile</a></li>
            <li><a (click)="handleLogout()">Logout</a></li>
          </ul>
        </li>
        </ul>
      </div>
    </div>
  </nav>

  <div>
  <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent implements OnInit {
  user$: Observable<User>;
  subscription: Subscription;

  constructor(private authService: AuthService,
    private router: Router,
    private store: Store) { }

  async handleLogout() {
    await this.authService.logout().then(() => {
      this.router.navigate(['/auth/login']);
    });
  }

  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  
}
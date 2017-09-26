import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{title}}
    </h1>
    <nav>
      <a routerLink="/auth">Login</a>
      <a routerLink="/auth/register">Register</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app works!';
}

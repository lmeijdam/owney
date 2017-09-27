import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/auth">Login</a>
      <a routerLink="/auth/register">Register</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'app/core/services/user.service';

@Component({
  selector: 'app-login',
  template: `
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <h2>Login</h2>
          <div class="alert alert-danger" *ngIf="err">{{ err }}</div>
          <auth-form (submitted)="onSubmit($event)">            
            <button type="submit" class="btn btn-primary">Login</button>
            <p class="text-right">
              <a routerLink="/auth/register">New user?</a>
            </p>
          </auth-form>
        </div>        
      </div>
  `
})
export class LoginComponent implements OnInit {
  err: string;

  constructor(private authService: AuthService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit($event) {
    const { email, password } = $event.value;

    try {
      this.authService.login(email, password)
      .then(() => this.router.navigate(['/']))
      .catch(err => this.err = err.message);
    } catch (err) {
      this.err = err;
    }
  }


}

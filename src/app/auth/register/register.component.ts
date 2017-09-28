import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'app/core/services/user.service';

@Component({
  selector: 'app-register',
  template: `
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <h2>Register</h2>
      <div class="alert alert-danger" *ngIf="err">{{ err }}</div>
      <auth-form (submitted)="onSubmit($event)">
        <button type="submit" class="btn btn-primary">Register</button>
      </auth-form>
    </div>        
  </div>
  `
})
export class RegisterComponent implements OnInit {
  err: string;

  constructor(private authService: AuthService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  async onSubmit($event) {
    const { email, password } = $event.value;

    try {
      await this.authService.register(email, password).then((user) => {
        this.userService.update(user);
        this.router.navigate(['/']);
      });
    } catch (err) {
      this.err = err;
    }
  }

}

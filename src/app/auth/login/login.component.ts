import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <p>
      login Works!

      <auth-form (submitted)="onSubmit($event)"></auth-form>
    </p>
  `
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onSubmit($event) {
    const {email, password} = $event.value;

    try {
      await this.authService.emailLogin(email, password);
      this.router.navigateByUrl("/friends");
    } catch(err) {
    }
  }


}

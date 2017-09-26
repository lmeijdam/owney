import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'app-register',
  template: `
    <p>
      register Works!
    </p>
  `
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}

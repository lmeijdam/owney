import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'auth-form',
    template: `<div>
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="form-horizontal">
    <div class="form-group">
        <label class="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
            <input class="form-control"
            type="email" 
            placeholder="Email address"
            formControlName="email">
        </div>
    </div>
    <div class="form-group"> 
        <label class="col-sm-2 control-label">Password</label>
        <div class="col-sm-10">
            <input class="form-control"
            type="password" 
            placeholder="Enter password"
            formControlName="password">
        </div>
    </div>
    <div class="form-group">
        <div class="col-lg-10 col-lg-offset-2">
            <ng-content></ng-content>
        </div>
    </div>
        
    </form>
  </div>`
})

export class AuthFormComponent implements OnInit {
    @Output() submitted = new EventEmitter<FormGroup>();

    form = this.fb.group({
        email: ['', Validators.email],
        password: ['', Validators.required]
      });

    constructor(private fb: FormBuilder) { }

    ngOnInit() { }

    onSubmit() {
        if(this.form.valid) 
            this.submitted.emit(this.form);
    }
}
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'auth-form',
    template: `<div>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <label>
            <input 
            type="email" 
            placeholder="Email address"
            formControlName="email">
        </label>
        <label>
            <input 
            type="password" 
            placeholder="Enter password"
            formControlName="password">
        </label>
        <button type="submit">Submit</button>
        <div *ngIf="emailFormat">
        Invalid email format
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
        if(this.form.valid) {
            this.submitted.emit(this.form);
        }
    }

    get emailFormat() {
        const control = this.form.get('email');
        return control.hasError('email') && control.touched;
      }

}
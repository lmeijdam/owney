import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from 'app/core/services/user.service';
import { Observable } from 'rxjs/Observable';
import { User, Store } from 'app/core/store';
import { AuthService } from 'app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'profile',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
        <h2>Profile</h2>

        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="form-horizontal">
        <div class="form-group">
        <label class="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
            <input class="form-control"
            type="email" 
            placeholder="Email address"
            formControlName="email">
        </div>
    </div><div class="form-group">
    <label class="col-sm-2 control-label">Name</label>
    <div class="col-sm-10">
        <input class="form-control"
        type="text" 
        placeholder="Name"
        formControlName="name">
    </div>
</div>
            
        <div class="form-group">
            <div class="col-lg-10 col-lg-offset-2">
                <button type="submit" class="btn btn-success">Save</button>
            </div>
        </div>     
        </form> 
    </div>
    </div>
    `
})

export class ProfileComponent implements OnInit, OnDestroy {
    user$: Subscription;
    uid: string = null;

    form = this.fb.group({
        email: ['', Validators.email],
        name: [''],
    });

    constructor(private userService: UserService, 
        private authService: AuthService, 
        private fb: FormBuilder) { }

    ngOnInit() {
        this.userService.get(this.authService.uid).subscribe((user: User) => {
            console.log("TEST")
        });
    }

    ngOnDestroy() {
    }

    onSubmit() {
        console.log(this.form.value);
        // saving the user info
    }
}
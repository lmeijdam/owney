import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'profile-form',
    template: `
    <form  [formGroup]="form" (ngSubmit)="submitForm()"
    class="form-horizontal">
        <div class="form-group">
            <label class="col-sm-2 control-label">Name</label>
            <div class="col-sm-10">
                <input class="form-control"
                type="text" 
                placeholder="Name"
                formControlName="name">
            </div>
        </div>            
        <div class="form-group">
            <div class="col-md-6 col-md-offset-3">
                <button type="submit" class="btn btn-primary btn-block">Save</button>
            </div>
        </div>     
    </form> 
    `
})

export class ProfileFormComponent implements OnInit {
    @Input() data: any;
    @Output() submitted = new EventEmitter<FormGroup>();
    form = this.fb.group({
        name: ['']
    });
    constructor(
        private fb: FormBuilder) { }

    ngOnInit() {
        if(!this.data) return;
        this.form.controls['name'].setValue(this.data.name);
     }

     submitForm() {
         this.submitted.emit(this.form.value);
     }
}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { CoreModule } from 'app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ProfileService } from 'app/profile/services/profile.service';
import { CommonModule } from '@angular/common';
import { ProfileFormComponent } from 'app/profile/components/profile-form.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
      CoreModule,
      ReactiveFormsModule,
      AngularFireDatabaseModule,
      CommonModule
    ],
    declarations: [ProfileComponent, ProfileFormComponent],
    providers: [ProfileService]
})
export class ProfileModule { }

import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import { FitnessTrackerComponent } from './fitness-tracker.component';
import {FitnessRoutesModule} from './fitness-tracker.routing';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  imports: [
    SharedModule,
    FitnessRoutesModule,
  ],
  declarations: [FitnessTrackerComponent, SignupComponent, LoginComponent, TrainingComponent, CurrentTrainingComponent, NewTrainingComponent, PastTrainingComponent, WelcomeComponent],
})
export class FitnessTrackerModule { }

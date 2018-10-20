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
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopTrainingComponent } from './training/stop-training/stop-training.component';
import {AuthService} from './auth/auth.service';
import {TrainingService} from './training/training.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../../../environments/environment';

@NgModule({
  imports: [
    SharedModule,
    FitnessRoutesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [FitnessTrackerComponent, SignupComponent, LoginComponent, TrainingComponent, CurrentTrainingComponent, NewTrainingComponent, PastTrainingComponent, WelcomeComponent, HeaderComponent, SidenavListComponent, StopTrainingComponent],
  entryComponents:[StopTrainingComponent],
  providers:[AuthService,TrainingService]
})
export class FitnessTrackerModule { }

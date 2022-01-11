import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KycRoutingModule } from './kyc-routing.module';
import { InitialActivityComponent } from './initial-activity/initial-activity.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [InitialActivityComponent, SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    KycRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
})
export class KycModule {}

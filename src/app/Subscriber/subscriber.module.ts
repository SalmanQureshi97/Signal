import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

import { SubscriberRoutingModule } from './subscriber-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AssetInitComponent } from './asset-init/asset-init.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SignalsComponent } from './signals/signals.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriberRoutingModule,
    SharedModule,

    NgApexchartsModule,
  ],
  declarations: [HomeComponent, AssetInitComponent, SignalsComponent],
})
export class SubscriberModule {}

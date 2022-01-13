import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraderRoutingModule } from './trader-routing.module';
import { TraderHomeComponent } from './trader-home/trader-home.component';
import { GridListComponent } from '../shared/grid-list/grid-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TraderHomeComponent],
  imports: [CommonModule, TraderRoutingModule, SharedModule],
})
export class TraderModule {}

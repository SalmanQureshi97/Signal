import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group.component';
import { GroupRoutingModule } from './group-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ChatComponent } from './chat/chat.component';
import { SignalsComponent } from '../signals/signals.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SignalListComponent } from './signal-list/signal-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    GroupComponent,
    ChatComponent,
    TimelineComponent,
    SignalListComponent,
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
    MatTabsModule,
    SharedModule,
    FormsModule,
  ],
})
export class GroupModule {}

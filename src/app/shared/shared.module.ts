import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridListComponent } from './grid-list/grid-list.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BottomTabsComponent } from './bottom-tabs/bottom-tabs.component';
import { RouterModule } from '@angular/router';
import { SimpleChartComponent } from './simple-chart/simple-chart.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { SignalBoxComponent } from './signal-box/signal-box.component';

@NgModule({
  declarations: [
    GridListComponent,
    BottomTabsComponent,
    SimpleChartComponent,
    GridItemComponent,
    SignalBoxComponent,
  ],
  imports: [CommonModule, NgApexchartsModule, RouterModule],
  exports: [
    GridListComponent,
    BottomTabsComponent,
    SimpleChartComponent,
    GridItemComponent,
    SignalBoxComponent,
  ],
})
export class SharedModule {}

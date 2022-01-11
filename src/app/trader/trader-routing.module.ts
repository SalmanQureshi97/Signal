import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraderHomeComponent } from './trader-home/trader-home.component';

const routes: Routes = [
  {
    path: 'main',
    pathMatch: 'full',
    component: TraderHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraderRoutingModule {}

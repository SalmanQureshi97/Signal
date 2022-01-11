import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetInitComponent } from './asset-init/asset-init.component';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { NavigatorComponent } from '../navigator/navigator.component';
import { SignalsComponent } from './signals/signals.component';
import { TraderComponent } from './trader/trader.component';

export const routes: Routes = [
  {
    path: 'main',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'main/:coinId',
    pathMatch: 'full',
    component: AssetInitComponent,
  },
  {
    path: 'trader/:traderId',
    pathMatch: 'full',
    component: TraderComponent,
  },
  {
    path: 'trader/:traderId/:groupId',
    loadChildren: () =>
      import('./group/group.module').then((m) => m.GroupModule),
  },
  {
    path: 'main/:coinId/signals',
    pathMatch: 'full',
    component: SignalsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriberRoutingModule {}

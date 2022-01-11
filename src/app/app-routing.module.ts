import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NavigatorComponent } from './navigator/navigator.component';

const routes: Routes = [
  {
    path: 'kyc',
    loadChildren: () => import('./kyc/kyc.module').then((m) => m.KycModule),
  },

  {
    path: 'subscriber',
    loadChildren: () =>
      import('./Subscriber/subscriber.module').then((m) => m.SubscriberModule),
  },
  {
    path: 'trader',
    loadChildren: () =>
      import('./Trader/trader.module').then((m) => m.TraderModule),
  },

  {
    path: '',
    pathMatch: 'full',
    component: NavigatorComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

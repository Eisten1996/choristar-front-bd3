import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'claims',
    loadChildren: () =>
      import('./pages/claim/claim.module').then((m) => m.ClaimModule)
  },
  {
    path: 'profiles',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule)
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./pages/client/client.module').then((m) => m.ClientModule)
  },
  {
    path: 'requests',
    loadChildren: () =>
      import('./pages/request/request.module').then((m) => m.RequestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

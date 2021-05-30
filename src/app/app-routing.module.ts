import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./pages/requests/requests.module').then(m => m.RequestsModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./pages/update/update.module').then(m => m.UpdateModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('./pages/delete/delete.module').then(m => m.DeleteModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

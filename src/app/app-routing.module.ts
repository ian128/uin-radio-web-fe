import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: ()=> import('./pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path: 'live-show',
    loadChildren: ()=> import('./pages/live-show/live-show.module').then(m=>m.LiveShowModule)
  },
  {
   path: '**',
   redirectTo: 'home',
   pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

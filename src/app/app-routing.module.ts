import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';


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
    path: 'videos',
    loadChildren: ()=> import('./pages/videos/videos.module').then(m=>m.VideosModule)
  },
  {
    path: 'news',
    loadChildren: ()=> import('./pages/news/news.module').then(m=>m.NewsModule)
  },
  {
    path: 'faq',
    loadChildren: ()=> import('./pages/faq/faq.module').then(m=>m.FaqModule)
  },
  {
    path: 'contact',
    loadChildren: ()=> import('./pages/contact/contact.module').then(m=>m.ContactModule)
  },
  {
    path: 'register',
    component: RegisterComponent
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

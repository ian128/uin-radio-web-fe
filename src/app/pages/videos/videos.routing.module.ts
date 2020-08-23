import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosComponent } from './videos.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

const routes: Routes=[
    {
        path: '', component: VideosComponent
    },
    {
        path: 'detail/:id', component: VideoDetailComponent
    },
    {
        path: '**', redirectTo: '', pathMatch: 'full'
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})

export class VideosRoutingModule {}

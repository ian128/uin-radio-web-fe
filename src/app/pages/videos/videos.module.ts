import { SharedModule } from 'src/shared/shared.module';
import { NgModule } from '@angular/core';
import { VideosComponent } from './videos.component';
import { VideosRoutingModule } from './videos.routing.module';
import { VideoDetailComponent } from './video-detail/video-detail.component';

@NgModule({
    declarations: [
        VideosComponent,
        VideoDetailComponent
    ],
    imports: [
        SharedModule,
        VideosRoutingModule
    ],
})

export class VideosModule { }

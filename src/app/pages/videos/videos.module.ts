import { SharedModule } from 'src/shared/shared.module';
import { NgModule } from '@angular/core';
import { VideosComponent } from './videos.component';
import { VideosRoutingModule } from './videos.routing.module';

@NgModule({
    declarations: [
        VideosComponent
    ],
    imports: [
        SharedModule,
        VideosRoutingModule
    ],
})

export class VideosModule { }

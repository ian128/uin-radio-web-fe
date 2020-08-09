import { SharedModule } from 'src/shared/shared.module';
import { NgModule } from '@angular/core';
import { LiveShowRoutingModule } from './live-show.routing.module';
import { LiveShowComponent } from './live-show.component';
import { SafePipe } from 'src/pipes/sanitize-url.pipe';

@NgModule({
    declarations: [
        LiveShowComponent
    ],
    imports: [
        SharedModule,
        LiveShowRoutingModule
    ],
    providers:[
        SafePipe
    ]
})

export class LiveShowModule { }

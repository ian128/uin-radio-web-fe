import { SharedModule } from 'src/shared/shared.module';
import { NgModule } from '@angular/core';
import { LiveShowRoutingModule } from './live-show.routing.module';
import { LiveShowComponent } from './live-show.component';

@NgModule({
    declarations: [
        LiveShowComponent
    ],
    imports: [
        SharedModule,
        LiveShowRoutingModule
    ],
})

export class LiveShowModule { }

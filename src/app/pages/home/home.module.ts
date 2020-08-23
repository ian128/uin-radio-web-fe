import { HomeComponent } from './home.component';
import { SharedModule } from 'src/shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule,
        HomeRoutingModule,
        NgImageSliderModule
    ],
})

export class HomeModule { }

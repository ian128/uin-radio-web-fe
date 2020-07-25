import { HomeComponent } from './home.component';
import { SharedModule } from 'src/shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
})

export class HomeModule { }

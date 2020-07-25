import { SharedModule } from 'src/shared/shared.module';
import { NgModule } from '@angular/core';
import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq.routing.module';

@NgModule({
    declarations: [
        FaqComponent
    ],
    imports: [
        SharedModule,
        FaqRoutingModule
    ],
})

export class FaqModule { }

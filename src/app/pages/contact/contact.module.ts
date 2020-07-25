import { SharedModule } from 'src/shared/shared.module';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing.module';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        SharedModule,
        ContactRoutingModule
    ],
})

export class ContactModule { }

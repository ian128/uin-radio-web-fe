import { SharedModule } from 'src/shared/shared.module';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        SharedModule,
        ContactRoutingModule,
        FontAwesomeModule
    ],
})

export class ContactModule { }

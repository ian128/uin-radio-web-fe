import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

const core=[
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
]

const frequentlyUsedComponent=[
    HeaderComponent
]

@NgModule({
    declarations: frequentlyUsedComponent,
    imports: core,
    exports:[
        ...frequentlyUsedComponent,
        ...core,
    ],
})
export class SharedModule { }

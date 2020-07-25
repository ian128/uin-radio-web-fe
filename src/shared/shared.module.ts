import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { VideosCardComponent } from './videos-card/videos-card.component';
import { FooterComponent } from './footer/footer.component';

const core=[
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
]

const frequentlyUsedComponent=[
    HeaderComponent,
    NewsCardComponent,
    VideosCardComponent,
    FooterComponent
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

import { NgModule } from '@angular/core';
import { NewsComponent} from './news.component'
import { SharedModule } from 'src/shared/shared.module';
import { NewsRoutingModule } from './news.routing.module';
import { NewsDetailComponent } from './news-detail/news-detail.component';

@NgModule({
    declarations: [
        NewsComponent,
        NewsDetailComponent
    ],
    imports: [
        NewsRoutingModule,
        SharedModule,
    ],
})

export class NewsModule { }

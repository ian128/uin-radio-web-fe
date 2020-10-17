import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  imgPrefix = environment.host

  @Input('data') data: any
  constructor() { }

  ngOnInit(): void {
  }

}

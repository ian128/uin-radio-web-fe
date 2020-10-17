import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'videos-card',
  templateUrl: './videos-card.component.html',
  styleUrls: ['./videos-card.component.scss']
})
export class VideosCardComponent implements OnInit {
  imgPrefix = environment.host

  @Input('data') data: any

  constructor() { }

  ngOnInit(): void {
  }

}

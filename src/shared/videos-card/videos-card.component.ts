import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'videos-card',
  templateUrl: './videos-card.component.html',
  styleUrls: ['./videos-card.component.scss']
})
export class VideosCardComponent implements OnInit {
  @Input('data') data: any

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/services/screen.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  links=[
    {
      name: 'Home',
      value: '/home'
    },
    {
      name: 'Live Show',
      value: '/live-show'
    },
    {
      name: 'Videos',
      value: '/videos'
    },
    {
      name: 'News',
      value: '/news'
    },
    {
      name: 'FAQ',
      value: '/faq'
    },
    {
      name: 'Contact',
      value: '/contact'
    }
  ]
  
  constructor(
    private screenSvc: ScreenService
  ) { }

  screenNotation
  ngOnInit(): void {
    this.screenSvc.prefix.subscribe(
      r => this.screenNotation = r
    )
  }

}

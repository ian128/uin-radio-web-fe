import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {
  }

}

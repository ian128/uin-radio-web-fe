import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/services/screen.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    trigger('menu', [
      state('open', style({
        'height': '*',
        'opacity': '1.0'
      })),
      state('closed', style({
        'height': '0',
        'opacity': '0.0'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ]
})

export class HeaderComponent implements OnInit {
  state: any
  
  opened= false

  constructor(
    private screenSvc: ScreenService
  ) { }

  ngOnInit(): void {
    this.screenSvc.prefix.subscribe((res)=>{
      console.log(res)
      if(res < 2) this.opened=false
      this.state=res
    })
  }

  toggle(){
    this.opened = !this.opened
  }
}

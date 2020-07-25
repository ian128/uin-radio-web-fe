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
        'bottom': '0',
        'opacity': '1.0',
        'z-index':100
      })),
      state('closed', style({
        'bottom': '100vh',
        'opacity': '0.0',
        'z-index':-10
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
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

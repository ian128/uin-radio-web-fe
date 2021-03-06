import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import localeId from '@angular/common/locales/id'; 
import { registerLocaleData } from '@angular/common';
import { environment } from 'src/environments/environment';
registerLocaleData(localeId, 'id'); 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'uin-radio';
  onNavigate: boolean = false

  constructor(private router: Router){
    if(environment.production){
      console.warn("Console log will be obscured!")
      window.console.log = function () {};
    }
    
    this.router.events.subscribe(
      (res)=>{
        if(res instanceof NavigationEnd){
          window.scrollTo(0, 0);
        }
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/services/screen.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    trigger('menu', [
      state('open', style({
        'opacity': '1.0',
        'z-index':100,
       
      })),
      state('closed', style({
        'opacity': '0.0',
        'z-index':-2,
      
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
  state: any
  
  opened= false
  isSticky: boolean

  constructor(
    private screenSvc: ScreenService,
    public router: Router,
    private authSvc: AuthService
  ) { }

  loginForm = new FormGroup({
    email: new FormControl("admin@admin.com", {
      validators: [Validators.required]
    }),
    password: new FormControl("123456",{
      validators: [Validators.required]
    }),
  })

  ngOnInit(): void {
    this.screenSvc.prefix.subscribe((res)=>{
      console.log(res)
      if(res >= 2) this.opened=false
      this.state=res
    })

    window.onscroll = ()=>{
      let navbar = document.querySelector("header")
      if(navbar){
       
        let params=navbar.getBoundingClientRect()
        if (window.pageYOffset > params.height*1.1) {
          this.isSticky=true
        } else {
          this.isSticky=false
        }
      }
    }  

  }

  toggle(){
    this.opened = !this.opened
  }

  nav(i){
    this.toggle()
    this.router.navigateByUrl(i.value)
  }

  login(){
    this.authSvc.login(this.loginForm.value).subscribe(
      r =>{
        console.log(r)
      },
      err => {
        console.log(err)
      }
    )
  }
}

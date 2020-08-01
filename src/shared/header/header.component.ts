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
    email: new FormControl(null, {
      validators: [Validators.required, Validators.email],
      updateOn: 'change'
    }),
    password: new FormControl(null,{
      validators: [Validators.required],
      updateOn: 'change'
    }),
  })

  ngOnInit(): void {
    this.screenSvc.prefix.subscribe((res)=>{
      if(res >= 2) this.opened=false
      this.state=res
    })

  }

  flags={
    isProcessing: false
  }

  toggle(){
    this.opened = !this.opened
  }

  nav(i){
    this.toggle()
    this.router.navigateByUrl(i.value)
  }

  async login(){
    this.flags.isProcessing=true

    try{
      let res: any = await this.authSvc.login(this.loginForm.value).toPromise()
      console.log(res)
      if(res.status == 0) alert("Wrong email and/or password combinations")
      else {
        alert("Login is successful")
        this.authSvc.writeUserToken(res)
        document.getElementById('hideModal').click()
      }

    }catch(e){
      console.log(e)
    }
    finally{
      this.flags.isProcessing=false
    }
  }
}

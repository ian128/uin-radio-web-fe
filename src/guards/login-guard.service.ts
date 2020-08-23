import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';
import { AuthService } from 'src/services/auth.service';

@Injectable()

export class LoginGuardService implements CanActivate {
  constructor(
      public router: Router,
      private authSvc: AuthService,
      private location: Location,
    ) {}
  canActivate(): boolean {
    if(!this.authSvc.getUserProfile()) {
        this.router.navigate(['/home']);
        return false;
    }else{
        return true;
    }
  }
}
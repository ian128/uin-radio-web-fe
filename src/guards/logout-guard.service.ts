import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Injectable()

export class LogoutGuardService implements CanActivate {
  constructor(
      public router: Router,
      private authSvc: AuthService
    ) {}
  canActivate(): boolean {
    if (this.authSvc.getUserProfile()) {
      this.router.navigateByUrl('/home')
      return false;
    }else{
      return true;
    }
  }
}
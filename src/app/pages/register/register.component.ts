import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl('Admin'), 
    email: new FormControl('admin@admin.com'), 
    password: new FormControl('123456'), 
    gender: new FormControl('M'), 
    phone: new FormControl('08123948576'), 
    birthdate: new FormControl('27/11/1999'), 
    status: new FormControl(1),  
    agree: new FormControl(true, {
      validators: Validators.requiredTrue
    })
  })
  constructor(
    private authSvc: AuthService
  ) { }

  ngOnInit(): void {
  }


  register(){
    this.authSvc.signUp(this.registerForm.value).subscribe(
      (res)=>{
        console.log(res)
      },
      (err)=>{
        console.log(err)
      }
    )
  }
}

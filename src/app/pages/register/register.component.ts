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
    name: new FormControl('Tesadmin'), 
    email: new FormControl('tes@tes.com'), 
    password: new FormControl('123456'), 
    gender: new FormControl('M'), 
    birthdate: new FormGroup({
      dd: new FormControl(27,{
        validators: [Validators.required]
      }),
      mm: new FormControl(11,{
        validators: [Validators.required]
      }),
      yyyy: new FormControl(1919,{
        validators: [Validators.required]
      })
    }), 
    phone: new FormControl('08123948576'), 
    status: new FormControl(1),  
    agree: new FormControl(true, {
      validators: Validators.requiredTrue
    })
  })
  
  b
  constructor(
    private authSvc: AuthService
  ) { }

  ngOnInit(): void {
  }


  register(){
    let body = this.registerForm.value

    body.birthdate = body.birthdate.dd.toString().padStart(2,'0')+'/'+
    body.birthdate.mm.toString().padStart(2,'0')+'/'+body.birthdate.yyyy.toString().padStart(2,'0')
    console.log(body)
    
    return
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

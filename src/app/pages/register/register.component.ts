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
    name: new FormControl(null,{
      validators: [Validators.required],
      updateOn: 'change'
    }), 
    email: new FormControl(null,{
      validators: [Validators.required, Validators.email],
      updateOn: 'change'
    }), 
    password: new FormControl(null,{
      validators: [Validators.required],
      updateOn: 'change'
    }),
    confirmPassword: new FormControl(null,{
      validators: [Validators.required],
      updateOn: 'change'
    }), 
    gender: new FormControl(null,{
      validators: [Validators.required],
      updateOn: 'change'
    }), 
    bdate: new FormControl(null,{
      validators: [Validators.required],
      updateOn: 'change'
    }),
    phone: new FormControl(null,{
      validators: [Validators.required],
      updateOn: 'change'
    }), 
    status: new FormControl(0),  
    agree: new FormControl(null, {
      validators: [Validators.requiredTrue],
      updateOn: 'change'
    })
  })

  passwordMatch: boolean = false

  flags={
    isProcessing: false,
    emailHasBeenRegistered: false,
  }

  constructor(
    private authSvc: AuthService
  ) { }

  ngOnInit(): void {

    /*
    this.registerForm.patchValue({
      name: "tes", 
      email: "tes1@tes.com", 
      password: "123456",
      confirmPassword: "123456", 
      gender: "M",
      bd:{
        dd: 27,
        mm: 11,
        yyyy: 1990
      }, 
      phone: "08129384", 
      status: 0,
      agree: true
    })*/

    this.registerForm.controls.confirmPassword.valueChanges.subscribe(
      (res)=>{
        let same = this.registerForm.controls.password.value == res
        this.passwordMatch = same
      },
    )
    
  }


  async register(){
    this.flags.emailHasBeenRegistered=false
    let body = this.registerForm.value

    let bDateSplit = this.registerForm.controls.bdate.value.split('-')

    body.birthdate = bDateSplit[0]+'/'+
    bDateSplit[1]+'/'+bDateSplit[2]

    console.log(body)
  
    this.flags.isProcessing=true
    try{
      let res = await this.authSvc.signUp(this.registerForm.value).toPromise()
      alert("Register is successfull")
      console.log(res)
    }catch(e){
      alert("Email has been registered before. Please use another email")
      this.flags.emailHasBeenRegistered=true
      console.log(e)
    }finally{
      this.flags.isProcessing=false
    }

  }
}

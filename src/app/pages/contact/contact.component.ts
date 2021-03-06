import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GenericService } from 'src/services/generic.service';
import * as SolidIcon from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  faEmail = SolidIcon.faEnvelope
  faAddress = SolidIcon.faBuilding
  faPhone = SolidIcon.faPhone

  flags={
    isProcessing: false
  }

  form= new FormGroup({
    name : new FormControl(null,{
      validators: [Validators.required],
      updateOn: 'change'
    }),
    email: new FormControl(null,{
      validators: [Validators.required, Validators.email],
      updateOn: 'change'
    }),
    message: new FormControl(null,{
      validators: [Validators.required],
      updateOn: 'change'
    })
  })
  
  constructor(
    private genericSvc: GenericService
  ) { }

  ngOnInit(): void {
  }

  async send(){
    console.log(this.form.value)
    this.flags.isProcessing=true
    try{
      let res = await this.genericSvc.sendInquiry(this.form.value).toPromise()
      console.log(res)
      alert("Inquiry has been sent! We will reply you as soon as possible")
      this.form.reset()
    }catch(e){

    }finally{
      this.flags.isProcessing=false
    }
  }

}

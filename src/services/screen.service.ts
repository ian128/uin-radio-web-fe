import { Injectable, HostListener, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ScreenService{
    width=0
    prefix= null

    constructor(){
        this.width = document.body.clientWidth;
        this.namePrefix()
        console.log(this.prefix)

        window.onresize=(e)=>{
            let calcW = document.body.clientWidth
            this.width = calcW
            this.namePrefix()
            console.log(this.prefix)
       }
    }

    namePrefix(){
        let s = this.width
        if(s < 576) this.prefix = 'xs'
        else if(s<767) this.prefix= 'sm' 
        else if(s<991) this.prefix='md'
        else if(s<1199) this.prefix='lg'
        else this.prefix='xl'
    }
}
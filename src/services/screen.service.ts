import { Injectable, HostListener, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription, BehaviorSubject } from "rxjs";
import { EventEmitter } from 'protractor';

@Injectable({
    providedIn: 'root'
})
export class ScreenService{
    width=0
    prefix= new BehaviorSubject(null)

    constructor(){
        this.width = document.body.clientWidth;
        this.namePrefix()

        window.onresize=(e)=>{
            let calcW = document.body.clientWidth
            this.width = calcW
            this.namePrefix()
       }
    }

    namePrefix(){
        let s = this.width
        if(s < 576) this.prefix.next(0)
        else if(s<767) this.prefix.next(1)
        else if(s<991) this.prefix.next(2)
        else if(s<1199) this.prefix.next(3)
        else this.prefix.next(4)
    }
}
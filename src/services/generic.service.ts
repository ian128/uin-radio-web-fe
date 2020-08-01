import { Injectable, HostListener, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription, BehaviorSubject } from "rxjs";
import { EventEmitter } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GenericService{
    constructor(
        private http: HttpClient
    ){}

    private convertToFormData(body){
        let fData = new FormData()
        for(let i in body){
            fData.append(i, body[i])
        }
        return fData
    }

    sendInquiry(body){
       return this.http.post(environment.base_API+'/contact/add', this.convertToFormData(body))
    }
}
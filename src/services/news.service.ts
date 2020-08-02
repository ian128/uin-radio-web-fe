
import { Injectable, HostListener, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription, BehaviorSubject } from "rxjs";
import { EventEmitter } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class NewsService{
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

    getNews(){
       return this.http.get(environment.base_API+'news/')
    }

    async getNewsDetail(id){
        let res: any[]= await this.http.get<any>(environment.base_API+'news/').toPromise()
        let news = res.find( i => i.id == id)
        return news
    }
}
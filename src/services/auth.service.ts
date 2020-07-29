import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AuthService{
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

    login(body){
        return this.http.post(environment.base_API+'/user/login', this.convertToFormData(body))
    }

    signUp(body){
        this.convertToFormData(body)
        return this.http.post(environment.base_API+'/user/add', this.convertToFormData(body))
    }
}
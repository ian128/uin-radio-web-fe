import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { env } from 'process';

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    constructor(
        private http: HttpClient
    ){}

    login(body){
        return this.http.post(environment.base_API+'/user/login', body)
    }

    signUp(body){
        return this.http.post(environment.base_API+'/user/add', body)
    }
}
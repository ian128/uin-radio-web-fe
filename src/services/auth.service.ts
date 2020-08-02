import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    constructor(
        private http: HttpClient,
        private cookiesSvc: CookieService
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

    logOut(){
        this.cookiesSvc.delete('user')
        return true
    }

    signUp(body){
        this.convertToFormData(body)
        return this.http.post(environment.base_API+'/user/add', this.convertToFormData(body))
    }

    writeUserToken(body){
        this.cookiesSvc.set('user', JSON.stringify(body), new Date(new Date().getTime() + 86400000), '/')
    }

    getUserToken(){
        let res = this.cookiesSvc.get('user')
        try{
            return JSON.parse(res)
        }catch(e){
            return false
        }
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { StorageService } from './secure-storage.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class HomepageService{
    constructor(
        private http: HttpClient,
        private db: AngularFirestore
    ){}

    getChatSubs(liveShowID){
        return this.db.collection('live-chats').doc(liveShowID).collection('chat').valueChanges()
    }

    async sendChat(liveShowID, senderID, senderName, senderEmail, senderMsg){
        return await this.db.collection('live-chats').doc(liveShowID).collection('chat').doc(new Date().toISOString()).set({
            name: senderName,
            email: senderEmail,
            id: senderID,
            msg: senderMsg,
            time: new Date().toISOString()
        })
    }
    

}
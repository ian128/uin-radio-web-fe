import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VideosService } from 'src/services/videos.service';
import { NewsService } from 'src/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos: any
  news: any

  chatTL: any
  chat=[
    {
      type: 'other',
      msg: '🍞'
    },
    {
      type: 'you',
      msg: 'ok'
    },
    {
      type: 'other',
      msg: '🍞'
    },
    {
      type: 'you',
      msg: 'ok'
    },
    {
      type: 'other',
      msg: '🍞'
    },
    {
      type: 'you',
      msg: 'ok'
    },
    {
      type: 'other',
      msg: '🍞'
    },
    {
      type: 'you',
      msg: 'ok'
    },
     {
      type: 'other',
      msg: '🍞'
    },
    {
      type: 'you',
      msg: 'ok'
    },
  ]

  msgVal: any

  constructor(
    private videosSvc: VideosService,
    private newsSvc: NewsService
  ) { }

  ngOnInit(): void {
    this.chatTL = document.getElementById('chatTimeline')

    this.videosSvc.getVideos().toPromise().then(i =>{
      this.videos = i
      this.videos = this.videos.splice(0,3)
    })
    this.newsSvc.getNews().toPromise().then(i =>{
      this.news = i
      this.news = this.news.splice(0,3)
    })
  }

  scrollTL(){
    this.chatTL.scrollTop = this.chatTL.scrollHeight;
  }

  sendChat(){
    this.chat.push({type:"you", msg: this.msgVal})
  }

}

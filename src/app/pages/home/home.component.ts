import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { VideosService } from 'src/services/videos.service';
import { NewsService } from 'src/services/news.service';
import { LiveShowService } from 'src/services/live-show.service';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('nav') slider: NgImageSliderComponent;

  
  liveShows: any;
  videos: any
  news: any
  
  isCarouselCanLoad: true

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
    private newsSvc: NewsService,
    private liveShowSvc: LiveShowService
  ) { }
  
  ngAfterViewInit(): void {
      this.isCarouselCanLoad=true
  }

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

    this.liveShowSvc.getLiveShows().toPromise().then(i=>{
      this.liveShows = i
      this.liveShows = this.liveShows.splice(0,3)
      let imageObject=[]
      imageObject.push({image: null, thumbImage: null})
      for(let item of this.liveShows){
        imageObject.push({
          video: item.videolink,
          posterImage: 'https://developergadogado.xyz/mantapp/'+item.image,
        })
      }

      console.log(imageObject)
      this.slider.images=imageObject

    })
  }

  scrollTL(){
    this.chatTL.scrollTop = this.chatTL.scrollHeight;
  }

  sendChat(){
    this.chat.push({type:"you", msg: this.msgVal})
  }

  next(){
    this.slider.autoSlide=false
    this.slider.next()
  }
  prev(){
    this.slider.autoSlide=false
    this.slider.prev()
  }

  redirect(e){
    this.slider.autoSlide=false
    console.log(e)
  }

}

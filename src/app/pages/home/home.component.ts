import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { VideosService } from 'src/services/videos.service';
import { NewsService } from 'src/services/news.service';
import { LiveShowService } from 'src/services/live-show.service';
import { NgImageSliderComponent } from 'ng-image-slider';
import { DomSanitizer } from '@angular/platform-browser';
import { ScreenService } from 'src/services/screen.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/services/auth.service';
import { HomepageService } from 'src/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('nav') slider: NgImageSliderComponent;

  state={
    recentLiveShowData: null,

    recentLiveShow: null,
    isAutoScrollChat: true,

    chatRoomSubscription: null,
    
    isSendingChat: false
  }

  liveShows: any
  videos: any
  news: any

  screenSizeMode: any

  chatTL: any
  chat=[
    
  ]

  msgVal: any

  constructor(
    private videosSvc: VideosService,
    private newsSvc: NewsService,
    private liveShowSvc: LiveShowService,
    private sanitizer: DomSanitizer,
    private screenSvc: ScreenService,
    private authSvc: AuthService,
    private homeSvc: HomepageService
  ) { }
  
  ngOnDestroy(): void {
    if(this.state.chatRoomSubscription) this.state.chatRoomSubscription.unsubscribe()
  }
  
  getLoggedInEmail(){
    try{
      let res = this.authSvc.getUserProfile()
      return res["data login"].email
    }catch(e){
      return null
    }
  }

  isLoggedIn(){
    return this.authSvc.isLoggedIn()
  }

  ngAfterViewInit(): void {
    this.chatTL = document.getElementById('chatTimeline')
  }

  ngOnInit(): void {

    this.screenSvc.prefix.subscribe(r=>{
      this.screenSizeMode = r
    })

    this.videosSvc.getVideos().toPromise().then(i =>{
      let ar:any=i
      this.videos = ar.reverse()
      this.videos = this.videos.splice(0,3)
    })
    this.newsSvc.getNews().toPromise().then(i =>{
      let ar:any=i
      this.news = ar.reverse()
      this.news = this.news.splice(0,3)
    })

    this.liveShowSvc.getLiveShows().toPromise().then(i=>{
      let ar:any=i
      this.liveShows = ar.reverse()
      this.state.recentLiveShow = this.sanitizer.bypassSecurityTrustResourceUrl(ar[0].videolink)
      this.state.recentLiveShowData=ar[0]

      //this is a listener for chat room
      this.state.chatRoomSubscription = this.homeSvc.getChatSubs(this.state.recentLiveShowData.id).subscribe(res=>{
        this.chat = res
        console.log(res)
        setTimeout(()=>{
          if(this.state.isAutoScrollChat) this.scrollTL()
        },500)
      })

      this.state.recentLiveShowData.counterFunc = setInterval(()=>{
        try{
          let now = new Date().getTime()
          let next = new Date(this.state.recentLiveShowData.datetime).getTime()
          let diff = Math.floor( (next - now) / 1000);

          this.state.recentLiveShowData.diff = diff

          if(diff < 0){
            this.state.recentLiveShowData.allowShow = true
            clearTimeout(this.state.recentLiveShowData.counterFunc)
          }
        }catch(e){
          
        }
      },1)

      this.liveShows = this.liveShows.splice(1,4)
      let imageObject=[]
      imageObject.push({image: null, thumbImage: null})
      
      for(let item of this.liveShows){
        imageObject.push({
          video: item.videolink,
          posterImage: environment.host+item.image,
        })
      }
      this.slider.images=imageObject

      this.scrollTL()
    })
  }

  scrollTL(){
    this.chatTL.scrollTop = this.chatTL.scrollHeight;
  }

  async sendChat(){    
    let auth = this.authSvc.getUserProfile()
    console.log(auth)
    try{
      this.state.isSendingChat=true
      await this.homeSvc.sendChat(
        this.state.recentLiveShowData.id,
        auth['data login'].id,
        auth['data login'].nama,
        auth['data login'].email,
        this.msgVal)
      this.msgVal = ''
    }catch(e){

    }finally{
      this.state.isSendingChat=false
    }

  }

  nextCarousel(){
    this.slider.autoSlide=false
    this.slider.next()
  }
  prevCarousel(){
    this.slider.autoSlide=false
    this.slider.prev()
  }

  redirect(e){
    this.slider.autoSlide=false
    console.log(e)
  }

  genTime(){
    try{
      let time = this.state.recentLiveShowData.diff
      
      let hh = Math.floor(time/3600)
      let mm = Math.floor( (time - hh*3600) /60)
      let ss = Math.floor( (time - hh*3600 - mm*60))
      return hh.toString().padStart(2,'0')+':'+mm.toString().padStart(2,'0')+':'+ss.toString().padStart(2,'0')
    }catch(e){
      return ''
    }
  }
}

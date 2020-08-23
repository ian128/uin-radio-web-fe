import { Component, OnInit } from '@angular/core';
import { LiveShowService } from 'src/services/live-show.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-live-show',
  templateUrl: './live-show.component.html',
  styleUrls: ['./live-show.component.scss']
})
export class LiveShowComponent implements OnInit {
  slice = 5

  listOfLiveShows: any[]
  flags={
    isLoading: false,
  }
  constructor(
    private liveShowSvc: LiveShowService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getVideos()
  }

  async getVideos(){
    this.flags.isLoading=true
    try{
      let res: any= await this.liveShowSvc.getLiveShows().toPromise()
      this.listOfLiveShows = res.reverse()
      this.listOfLiveShows.forEach(i=>{
        i.videolink = this.sanitizer.bypassSecurityTrustResourceUrl(i.videolink)
      })
      console.log(this.listOfLiveShows)
    }catch(e){

    }finally{
      this.flags.isLoading=false
    }
    
  }

  addLimit(){
    this.slice+=5
  }
  
  sanitizedInnerHtml(src){
    return this.sanitizer.bypassSecurityTrustHtml(src)
  }

  playVideo(index){
    this.listOfLiveShows[index].play = true
  }
}

import { Component, OnInit } from '@angular/core';
import { LiveShowService } from 'src/services/live-show.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-live-show',
  templateUrl: './live-show.component.html',
  styleUrls: ['./live-show.component.scss']
})
export class LiveShowComponent implements OnInit {
  slice = 3

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
      this.listOfLiveShows = res
      console.log(this.listOfLiveShows)
    }catch(e){

    }finally{
      this.flags.isLoading=false
    }
    
  }

  addLimit(){
    this.slice+=3
  }
  
  sanitizedInnerHtml(src){
    return this.sanitizer.bypassSecurityTrustHtml(src)
  }
}

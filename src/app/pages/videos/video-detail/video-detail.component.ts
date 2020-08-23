import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/services/news.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { convertDate } from 'src/shared/utils';
import { VideosService } from 'src/services/videos.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {
  data:any ={}
  newsTxt=``
  videoUrl:  any= null

  flags={
    selectedID: null,
    isLoading: false,
    play: false
  }

  constructor(
    private videoSvc: VideosService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router,
  ) {
  }


  otherVideos: any[]

  ngOnInit(): void {
    this.getVideoDetails()
    this.getOtherVideos()

    this.router.events.subscribe(
      (res)=>{
        if(res instanceof NavigationEnd){
          this.getVideoDetails()
          this.getOtherVideos()
        }
      }
    )
  }

  async getOtherVideos(){
    try{
      let res: any = await this.videoSvc.getVideos().toPromise()
      res = res.reverse()
      this.otherVideos= res.filter(i => i.id != this.flags.selectedID)
    }catch(e){

    }finally{
      
    }
  }

  async getVideoDetails(){
    this.flags.selectedID = this.activatedRoute.snapshot.params.id
    try{
      this.flags.isLoading=true
      let res = await this.videoSvc.getVideoByID(this.flags.selectedID)
      console.log(res)
      this.data = res
      this.newsTxt = res.content
      this.videoUrl= this.sanitizer.bypassSecurityTrustResourceUrl(res.videolink)
      
    }catch(e){

    }finally{
      this.flags.isLoading=false
    }
  }

  getSanitizedContent(content){
    return this.sanitizer.bypassSecurityTrustHtml(content)
  }

  extractDateFromStr(str){
    return convertDate(str)
  }

}

import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/services/videos.service';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  imgPrefix = environment.host

  slice = 5

  listOfVideos: any[]
  flags={
    isLoading: false,
  }
  constructor(
    private videosSvc: VideosService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getVideos()
  }

  async getVideos(){
    this.flags.isLoading=true
    try{
      let res: any= await this.videosSvc.getVideos().toPromise()
      this.listOfVideos = res.reverse()
      console.log(this.listOfVideos)
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
}

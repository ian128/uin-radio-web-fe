import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/services/videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  slice = 3

  listOfVideos: any[]
  flags={
    isLoading: false,
  }
  constructor(
    private videosSvc: VideosService
  ) { }

  ngOnInit(): void {
    this.getVideos()
  }

  async getVideos(){
    this.flags.isLoading=true
    try{
      let res: any= await this.videosSvc.getVideos().toPromise()
      this.listOfVideos = res
      console.log(this.listOfVideos)
    }catch(e){

    }finally{
      this.flags.isLoading=false
    }
    
  }

  addLimit(){
    this.slice+=3
  }
}

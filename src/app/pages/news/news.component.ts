import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsService } from 'src/services/news.service';
import { convertDate } from 'src/shared/utils';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  imgPrefix = environment.host

  listOfNews: any[]
  slice = 5

  flags={
    isLoading: false,
  }

  constructor(
    private newsSvc: NewsService
  ) { }

  ngOnInit(): void {
    this.getNews()
  }

  async getNews(){
    this.flags.isLoading=true
    try{
      let res: any= await this.newsSvc.getNews().toPromise()
      this.listOfNews = res.reverse()
      console.log(this.listOfNews)
    }catch(e){

    }finally{
      this.flags.isLoading=false
    }
    
  }

  extractDateFromStr(str){
    try{
      return convertDate(str)
    }catch(e){
      let dd = str.slice(0,2)
      let mm = str.slice(2,4)
      let yy = str.slice(4,9)
      return convertDate(`${yy}-${mm}-${dd}`)
    }
  }

  addLimit(){
    this.slice+=5
  }
}

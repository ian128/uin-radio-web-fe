import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/services/news.service';
import { convertDate } from 'src/shared/utils';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  listOfNews: any[]
  slice = 3

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
      this.listOfNews = res
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
    this.slice+=3
  }
}

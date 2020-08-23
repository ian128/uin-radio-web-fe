import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/services/news.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { convertDate } from 'src/shared/utils';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  newsData:any ={}
  newsTxt=`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Vestibulum lorem sed risus ultricies tristique nulla. Lacinia at quis risus sed vulputate odio. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Nulla pellentesque dignissim enim sit amet. Quis varius quam quisque id diam. Sit amet porttitor eget dolor morbi non arcu risus. Nibh sed pulvinar proin gravida hendrerit. Fames ac turpis egestas maecenas pharetra convallis posuere. Arcu ac tortor dignissim convallis aenean et tortor at risus. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Turpis egestas zsed tempus urna et pharetra pharetra massa massa. Id aliquet lectus proin nibh nisl condimentum id venenatis. Vel eros donec ac odio tempor orci dapibus.
  Tristique magna sit amet purus gravida.</p>
  <p>Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Egestas sed tempus urna et pharetra pharetra massa massa. Enim nunc faucibus a pellentesque sit amet. Pellentesque nec nam aliquam sem et tortor consequat. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Est ultricies integer quis auctor elit. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Ullamcorper velit sed ullamcorper morbi tincidunt. Nisl nunc mi ipsum faucibus vitae aliquet nec. In cursus turpis massa tincidunt dui ut ornare. Semper quis lectus nulla at volutpat. Purus viverra accumsan in nisl. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Tortor id aliquet lectus proin. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Faucibus vitae aliquet nec ullamcorper sit amet risus. Massa enim nec dui nunc mattis enim ut tellus elementum.
  Magna ac placerat vestibulum lectus.</p>
	<p>Aenean et tortor at risus viverra adipiscing at in tellus. Nibh tortor id aliquet lectus proin. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Interdum varius sit amet mattis vulputate. Sem viverra aliquet eget sit amet tellus cras adipiscing. Nam libero justo laoreet sit. Adipiscing enim eu turpis egestas pretium aenean pharetra</p>`
  
  flags={
    selectedID: null,
    isLoading: false
  }

  constructor(
    private newsSvc: NewsService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {
  }


  otherNews: any[]

  ngOnInit(): void {
    this.getNewsDetails()
    this.getOtherNews()

    this.router.events.subscribe(
      (res)=>{
        if(res instanceof NavigationEnd){
          this.getNewsDetails()
          this.getOtherNews()
        }
      }
    )
  }

  async getOtherNews(){
    try{
      let res: any = await this.newsSvc.getNews().toPromise()
      res = res.reverse()
      this.otherNews= res.filter(i => i.id != this.flags.selectedID)
    }catch(e){

    }finally{
      
    }
  }

  async getNewsDetails(){
    this.flags.selectedID = this.activatedRoute.snapshot.params.id
    try{
      this.flags.isLoading=true
      let res = await this.newsSvc.getNewsDetail(this.flags.selectedID)
      this.newsData = res
      this.newsTxt = res.content
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

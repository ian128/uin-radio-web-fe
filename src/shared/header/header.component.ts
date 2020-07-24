import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/services/screen.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private screenSvc: ScreenService
  ) { }

  ngOnInit(): void {
  }

}

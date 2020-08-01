import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  chatTL: any
  chat=[
    {
      type: 'other',
      msg: '🍞'
    },
    {
      type: 'you',
      msg: 'ok'
    },
    {
      type: 'other',
      msg: '🍞'
    },
    {
      type: 'you',
      msg: 'ok'
    },
    {
      type: 'other',
      msg: '🍞'
    },
    {
      type: 'you',
      msg: 'ok'
    },
    {
      type: 'other',
      msg: '🍞'
    },
    {
      type: 'you',
      msg: 'ok'
    },
     {
      type: 'other',
      msg: '🍞'
    },
    {
      type: 'you',
      msg: 'ok'
    },
  ]

  msgVal: any

  constructor() { }

  ngOnInit(): void {
    this.chatTL = document.getElementById('chatTimeline')
  }

  scrollTL(){
    this.chatTL.scrollTop = this.chatTL.scrollHeight;
  }

  sendChat(){
    this.chat.push({type:"you", msg: this.msgVal})
  }

}

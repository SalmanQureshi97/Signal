import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  messageList = [1, 1, 1, 1, 1];
  constructor() {}
  textHeight;
  height: String;
  ngOnInit() {
    this.height = this._height();
    this.textHeight = parseInt(this.height.split('p')[0]) * 0.2;
    this.textHeight = this.textHeight + 'px';
  }

  _height() {
    let temp = window.innerHeight;
    temp = temp * 0.8;
    return temp + 'px';
  }
}

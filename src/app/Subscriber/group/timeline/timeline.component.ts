import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
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
    temp = temp * 0.9;
    return temp + 'px';
  }
}

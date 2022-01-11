import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-signal-box',
  templateUrl: './signal-box.component.html',
  styleUrls: ['./signal-box.component.scss'],
})
export class SignalBoxComponent implements OnInit {
  //Input Category
  @Input()
  itemList: Array<String>;

  signalType;
  //Input Category
  @Input()
  buy: number;

  //Input Category
  @Input()
  expired: boolean;

  buyColor = 'success';
  sellColor = 'danger';
  cardColor;
  constructor() {}

  ngOnInit() {
    if (this.buy == 1) {
      this.signalType = 'Buy Signal';
    } else {
      this.signalType = 'Sell Signal';
    }
  }
}

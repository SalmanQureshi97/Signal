import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-signal-list',
  templateUrl: './signal-list.component.html',
  styleUrls: ['./signal-list.component.scss'],
})
export class SignalListComponent implements OnInit {
  messageList = [1, 1, 1, 1, 1];
  constructor(public popoverCtrl: PopoverController) {}
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

  location = 'madison';
  conferenceDate = '2047-05-17';

  selectOptions = {
    header: 'Select a Location',
  };

  async presentPopover(event: Event) {
    // const popover = await this.popoverCtrl.create({
    //   component: PopoverPage,
    //   event,
    // });
    //await popover.present();
  }
}

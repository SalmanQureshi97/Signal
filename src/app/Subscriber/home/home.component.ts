import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //dataLoaded = false;
  random;
  items = [
    {
      img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      latestPrice: 76865,
      mCap: '23B',
      title: 'Ethereum',
    },
    {
      img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      latestPrice: 76865,
      mCap: '23B',
      title: 'Bitcoin',
    },
    {
      img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      latestPrice: 76865,
      mCap: '23B',
      title: 'Cardano',
    },
    {
      img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      latestPrice: 76865,
      mCap: '23B',
      title: 'Polkadot',
    },
  ];

  constructor() {}

  ngOnInit() {
    // let item: gridItem = {
    //   img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    //   latestPrice: '76865',
    //   mCap: '23B',
    //   title: 'Bitcoin',
    // };
    // let item2: gridItem = {
    //   img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    //   latestPrice: '76865',
    //   mCap: '23B',
    //   title: 'Cardano',
    // };
    // let item3: gridItem = {
    //   img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    //   latestPrice: '76865',
    //   mCap: '23B',
    //   title: 'PolkaDot',
    // };
    // let item4: gridItem = {
    //   img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    //   latestPrice: '76865',
    //   mCap: '23B',
    //   title: 'Ethereum',
    // };
    // this.itemlist.push(item);
    // this.itemlist.push(item2);
    // this.itemlist.push(item3);
    // this.itemlist.push(item4);
  }
}

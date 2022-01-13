import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trader-home',
  templateUrl: './trader-home.component.html',
  styleUrls: ['./trader-home.component.scss'],
})
export class TraderHomeComponent implements OnInit {
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

  ngOnInit() {}
}

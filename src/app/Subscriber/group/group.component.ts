import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  routes: Routes = [
    {
      path: 'main',
      pathMatch: 'full',
      component: HomeComponent,
    },
  ];
  constructor() {}

  ngOnInit() {}
}

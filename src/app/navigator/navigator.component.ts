import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../Subscriber/subscriber-routing.module';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  routeTo(url) {
    this.router.navigateByUrl(url);
  }
}

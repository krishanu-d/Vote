import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('sidenav') sidenav?: MatSidenav;

  reason = '';
  opened: boolean = true
  routes: Array<UserRoute>

  constructor() {
    this.routes = [
       {
        name: 'Past',
        path: 'past'
      }, {
        name: 'Current',
        path: 'current'
      }, {
        name: 'Upcoming',
        path: 'upcoming'
      }]
  }

  ngOnInit(): void {
  }

  open() {
    (this.sidenav as MatSidenav).open()
  }

  close(reason: string) {
    this.reason = reason;
    (this.sidenav as MatSidenav).close();
  }


}

interface UserRoute {
  name: string,
  path: string
}

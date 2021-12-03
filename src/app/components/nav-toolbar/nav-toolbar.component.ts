import { Component, OnInit } from '@angular/core';

export interface Tab {
  title: string;
  path: string;
}

@Component({
  selector: 'nav-toolbar',
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.scss']
})
export class NavToolbarComponent implements OnInit {
  constructor() { }
  tabs: Tab[] = [
    {
      title: 'projects',
      path: '/projects'
    },
    {
      title: 'about',
      path: '/about'
    },
    {
      title: 'contact',
      path: '/contact'
    }
  ]

  ngOnInit(): void {
  }

}

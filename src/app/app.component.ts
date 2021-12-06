import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent, Subject, Subscription} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'portfolio';
  showTitle = false;
  onDestroy = new Subject();

  constructor() {

  }
  ngOnInit() {
    if(window.innerWidth > 560) {
      this.showTitle = true;
    }

    fromEvent(window, 'resize').pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        if(window.innerWidth > 768) {
          this.showTitle = true
        } else {
          this.showTitle = false
        }
      });
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.unsubscribe();
  }

}

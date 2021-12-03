import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavToolbarComponent } from './components/nav-toolbar/nav-toolbar.component';
import {RouterModule} from "@angular/router";
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ChipComponent } from './components/chip/chip.component';

@NgModule({
  declarations: [
    AppComponent,
    NavToolbarComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    ProjectCardComponent,
    ChipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

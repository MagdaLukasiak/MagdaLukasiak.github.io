import { Component, OnInit } from '@angular/core';
import {ProjectCardInput} from "../../components/project-card/project-card.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectCardInput[] | undefined;
  constructor() { }

  ngOnInit(): void {
    this.projects = [
      {
        imgPath: 'assets/img/vs.png',
        header: 'Virtual Showroom',
        description: '3D platform to present company\'s products and innovations.',
        tags: ['commercial', 'desktop']
      },
      {
        imgPath: 'assets/img/student.png',
        header: 'Best Lecture',
        description: 'A website project created for students to help them choose the right lecturers and courses. ',
        tags: ['non-commercial', 'mobile']
      },
      {
        imgPath: 'assets/img/vinyl.png',
        header: 'Vinyl store',
        description: 'Online store with vinyl records. Two views:  product list and product card.',
        tags: ['non-commercial', 'mobile']
      },
      {
        imgPath: 'assets/img/reg-form.png',
        header: 'Registration form',
        description: 'Landing page for the virtual library with literature of economics and finance.',
        tags: ['non-commercial', 'desktop']
      },
    ]
  }

}

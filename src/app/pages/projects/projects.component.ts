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
        tags: ['commercial', 'desktop'],
        pdfPath: 'https://drive.google.com/file/d/1avjH1HWHG0dOThMQp-62L036D3a44DpA/view?fbclid=IwAR0EB9zFd1NGrBl2asijJCDIpeI_Y03I3sKierIlAPqaJ8c_q4nDib1A0oE'
      },
      {
        imgPath: 'assets/img/student.png',
        header: 'Best Lecture',
        description: 'A website project created for students to help them choose the right lecturers and courses. ',
        tags: ['non-commercial', 'mobile'],
        pdfPath: 'https://drive.google.com/file/d/1HSSdHxEcxXd6ZXd_tkvIa3JZhH9cuCgG/view?fbclid=IwAR1UgWHJ-hIl6nyxKWQfyE31dpNkjAMfmzsWP4DTMBzRndBQK2yDAsK9CjQ'
      },
      {
        imgPath: 'assets/img/vinyl.png',
        header: 'Vinyl store',
        description: 'Online store with vinyl records. Two views:  product list and product card.',
        tags: ['non-commercial', 'mobile'],
        pdfPath: 'https://xd.adobe.com/view/dc8b8ed1-de6b-4617-bfea-7d17ee51e3ee-89d8/?fbclid=IwAR0gwpPxVWCdX3OCqVYnRuku5_exJVFp0DjdnBlYVunQyJK0C79z6YnyypA'
      },
      {
        imgPath: 'assets/img/reg-form.png',
        header: 'Registration form',
        description: 'Landing page for the virtual library with literature of economics and finance.',
        tags: ['non-commercial', 'desktop'],
        pdfPath: 'https://xd.adobe.com/view/e017431f-5241-4aab-afd6-2026d5efe1fa-b544/?fbclid=IwAR3O2iyOj5QGQzFvnT0sZxzAE2qHAv870blSe2xKPZkMya4qNZj1QxewluU'
      },
    ]
  }

}

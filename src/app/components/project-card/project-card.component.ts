import {Component, Input, OnInit} from '@angular/core';

export interface ProjectCardInput {
  imgPath: string;
  header: string;
  description: string;
  tags: string[];
  pdfPath: string;
}

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() options: ProjectCardInput | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}

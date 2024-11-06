import { Component} from '@angular/core';
import { ProjectCardComponent } from "../../components/sub-components/project-card/project-card.component";
import { ProjectInterface } from './interface';
import projects from "../../assets/projects.json"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects-portfolio.component.html',
  styleUrls: ['./projects-portfolio.component.css']
})

export class ProjectsPortfolioComponent{

  projectsList:ProjectInterface[] = projects;

}
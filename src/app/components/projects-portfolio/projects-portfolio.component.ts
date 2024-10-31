import { Component } from '@angular/core';
import { ProjectCardComponent } from "../../components/sub-components/project-card/project-card.component";


@Component({
  selector: 'app-projects-portfolio',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects-portfolio.component.html',
  styleUrl: './projects-portfolio.component.css'
})
export class ProjectsPortfolioComponent {

}

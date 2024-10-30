import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ProfileCardComponent } from "../../components/profile-card/profile-card.component";
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { SkillsComponent } from "../../components/skills/skills.component";
import { CurriculumComponent } from "../../components/curriculum/curriculum.component";
import { ProjectsPortfolioComponent } from "../../components/projects-portfolio/projects-portfolio.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProfileCardComponent, AboutMeComponent, SkillsComponent, CurriculumComponent, ProjectsPortfolioComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

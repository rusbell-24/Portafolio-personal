import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.animationSkillsHandler();
  }

  ngOnInit(): void {
    this.animationSkillsHandler();
  }

  animationSkillsHandler(): void {
    const skills = document.getElementById('skills');
    if (skills) {
      const distanceSkills = window.innerHeight - skills.getBoundingClientRect().top;
      if (distanceSkills >= 300) {
        const skill = document.getElementsByClassName('progress');
        skill[0]?.classList.add('javascript');
        skill[1]?.classList.add('python');
        skill[2]?.classList.add('htmlCss');
        skill[3]?.classList.add('angular');
        skill[4]?.classList.add('reactJs');
        skill[5]?.classList.add('DRF');
        skill[6]?.classList.add('bootstrap');
        skill[7]?.classList.add('GIT');
        skill[8]?.classList.add('wordpress');
        skill[9]?.classList.add('elementor');
        skill[10]?.classList.add('empathy');
        skill[11]?.classList.add('creativity');
        skill[12]?.classList.add('teamWork');
        skill[13]?.classList.add('discipline');
        skill[14]?.classList.add('focused');
      }
    }
  }
}
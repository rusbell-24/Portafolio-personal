import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input({required:true}) img: string = ''; // Este input ademas es reuerido
  @Input({required:true}) title: string = '';
  @Input({required:true}) description: string = '';
  @Input({required:true}) urlCode: string = '';
  @Input({required:true}) urlPage: string = '';
}

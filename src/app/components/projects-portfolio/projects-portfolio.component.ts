import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProjectCardComponent } from "../../components/sub-components/project-card/project-card.component";
import { Observable } from 'rxjs';
import { ProjectInterface } from './interface';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-projects-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, HttpClientModule],
  templateUrl: './projects-portfolio.component.html',
  styleUrls: ['./projects-portfolio.component.css']
})
export class ProjectsPortfolioComponent implements OnInit {
  data: ProjectInterface[] = [];
  path = "../../assets/projects.json";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getJson_Service().subscribe((response: ProjectInterface[]) => {

      if (Array.isArray(response)) {
        this.data = response;
      } else {
        this.data = [response];
      }
    }, error => {
      console.log("Error al obtener los datos del json");
    });
  }
  
  getJson_Service(): Observable<ProjectInterface[]> {
    return this.http.get<ProjectInterface[]>(this.path);
  }
}
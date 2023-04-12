import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProject } from '../interfaces/IProject';
import { IApiResponse } from '../interfaces/IApiResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'https://quiz-3-server-nithya-1ww6.vercel.app/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(this.apiUrl);
  }

  addProject(project: IProject): Observable<IProject> {
    return this.http.post<IProject>(this.apiUrl, project);
  }
}

import { Component, OnInit} from '@angular/core';
import { ProjectService } from '../services/project.service';
import { IProject } from '../interfaces/IProject';
import { FormGroup, FormControl, Validators} from '@angular/forms';
 
@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent {

  constructor(private projectService: ProjectService) { }

  project: IProject = {
    title: '',
    description: '',
    category: '',
  };

  projectForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    category: new FormControl('', Validators.required),
  });

  onAddProject() {
    this.project.title = this.projectForm.value.title!!;
    this.project.description = this.projectForm.value.description!!;
    this.project.category = this.projectForm.value.category!!;

    this.projectService.addProject(this.project).subscribe((data) => {
      console.log(data);
    });

    this.projectForm.reset();
  }  
}

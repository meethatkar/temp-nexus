import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-project',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css'
})
export class CreateProjectComponent {

  constructor(private router:Router){}
  onCreate(createProjectData:NgForm){
    localStorage.setItem('project',createProjectData.value);
    localStorage.setItem('role','manager');
    this.router.navigate(['/home']);
  }

}

import { CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-project',
  imports: [FormsModule,CommonModule],
  templateUrl: './join-project.component.html',
  styleUrl: './join-project.component.css'
})
export class JoinProjectComponent {
  router=inject(Router);
  passwordVisible: boolean = false;
  prjDetail:string="";

  onJoin(joinProjectData:NgForm){
    //logic here
    const prjData=localStorage.getItem('project');
    if(prjData){
      //logic for checking project exits or not using prjID
      
    }
    localStorage.setItem('role','member');
    this.router.navigate(['/home']);
  }


  togglePassword(): void {
    this.passwordVisible=!this.passwordVisible;
  }
}

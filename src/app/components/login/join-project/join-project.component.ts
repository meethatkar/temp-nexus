import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-project',
  imports: [],
  templateUrl: './join-project.component.html',
  styleUrl: './join-project.component.css'
})
export class JoinProjectComponent {
  router=inject(Router);
  onJoin(){
    //logic here
    this.router.navigate(['/home']);
  }
}

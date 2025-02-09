import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-project',
  imports: [RouterLink],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css'
})
export class CreateProjectComponent {

  constructor(private router:Router){}
  onCreate(){
    //logic here
    this.router.navigate(['/home']);
  }
  onReset(){
    // reset logic here
  }
}

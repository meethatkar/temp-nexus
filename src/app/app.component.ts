import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserRegistrationComponent } from './components/login/user-registration/user-registration.component';
import { UserLoginComponent } from './components/login/user-login/user-login.component';
import { QuestionComponent } from './components/login/question/question.component';
import { CreateProjectComponent } from './components/login/create-project/create-project.component';
import { JoinProjectComponent } from './components/login/join-project/join-project.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { MyAccountComponent } from './components/pages/my-account/my-account.component';
import { DashboardComponent } from './components/navigation/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserLoginComponent,UserRegistrationComponent,QuestionComponent,CreateProjectComponent,JoinProjectComponent,NavbarComponent,MyAccountComponent,
    DashboardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'temp_nexus';
}

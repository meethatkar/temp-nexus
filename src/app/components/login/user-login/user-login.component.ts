import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { user } from '../../../model/user.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-login',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  // VARIABLES
  userObj:user=new user();
  router=inject(Router);
  passwordVisible=false;
  authService = inject(AuthService);    

  // METHODS
  onLogin(loginData:NgForm){
    if(this.authService.login(loginData.value.email,loginData.value.password)){
      alert('login successful');
      this.router.navigate(['/home']);
    }
    else{
      alert("Enter proper creditiantials ");
    }
    }

  togglePassword(){
    this.passwordVisible=!this.passwordVisible;
  }
}

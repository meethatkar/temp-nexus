import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { user } from '../../../model/user.model';

@Component({
  selector: 'app-user-login',
  imports: [RouterLink],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  userObj:user=new user();
  router=inject(Router);
  onLogin(){
    //logic will be here
    this.userObj.isLogin=true;
    this.router.navigate(['/home']);
  }

  onReset(){
    // logic here please
  }
}

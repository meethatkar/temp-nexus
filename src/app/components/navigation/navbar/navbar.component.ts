import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { user } from '../../../model/user.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  username="";
  password="";
  userObj:user = new user();
  authService=inject(AuthService);
  role=localStorage.getItem('role');

  //METHODS
  constructor(){
    
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  isLoggedIn():boolean{
    return this.authService.isAutheticated();
  }
  logout(){
    // this.userObj.isLogin=false;
    console.log(this.role);
    this.authService.logout();
  }

}

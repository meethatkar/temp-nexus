import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { user } from '../../../model/user.model';

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

  //METHODS
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  logout(){
    this.userObj.isLogin=false;
  }

}

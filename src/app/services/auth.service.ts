import { Injectable } from '@angular/core';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  login(email:string, password:string):boolean{
    let storedUser = localStorage.getItem('user');
    if(storedUser){
      let user = JSON.parse(storedUser);
      if(user.email === email && user.password === password){
        localStorage.setItem('isLoggedIn','true');
        return true;
      }
    }
    return false
  }

  logout(){
    console.log("before: "+localStorage.getItem('isLoggedIn'));
    localStorage.setItem('isLoggedIn','false');
    this.router.navigate(['/userLogin']);
    console.log("after: "+localStorage.getItem('isLoggedIn'));
  }

  isAutheticated():boolean{
    return localStorage.getItem('isLoggedIn')==='true';
  }


}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { user } from '../../../model/user.model';

@Component({
  selector: 'app-my-account',
  imports: [FormsModule,CommonModule],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css'
})
export class MyAccountComponent implements OnInit{

  // IsEdit:boolean=false;
  IsEdit={
    'profile':false,
    'professional':false,
    'account':false
  }
  userObj:user=new user();
  
  userData: any;
  passwordVisible:boolean=false;

  ngOnInit() {
    let storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.userData = JSON.parse(storedUser); // Parse the JSON string into an object
    }
  }
  

  workDetails = [
    { id: 101, task: "Project A - Task 1" },
    { id: 102, task: "Project B - Task 2" },
    { id: 103, task: "Project C - Task 3" }
  ];
  

  toggleEditP(on:boolean) {
    this.IsEdit.profile = on;
    if (!this.IsEdit.profile) {
      // When saving (status = false), update local storage
      localStorage.setItem('user', JSON.stringify(this.userData));
      alert("Profile updated successfully!");
    }
  }
  // toggleEditPro(on:boolean) {
  //   this.IsEdit.professional = on;
  //   if (this.IsEdit.professional) {
  //     // When saving (status = false), update local storage
  //     localStorage.setItem('user', JSON.stringify(this.userData));
  //     alert("Profile updated successfully!");
  //   }
  // }d
  toggleEditA(on:boolean) {
    this.IsEdit.account = on;
    if (!this.IsEdit.account) {
      // When saving (status = false), update local storage
      localStorage.setItem('user', JSON.stringify(this.userData));
      alert("Profile updated successfully!");
    }
  }

  togglePassword(){
    this.passwordVisible=!this.passwordVisible;
  }
}


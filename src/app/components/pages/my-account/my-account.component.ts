import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-account',
  imports: [FormsModule,CommonModule],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css'
})
export class MyAccountComponent {

  // IsEdit:boolean=false;
  IsEdit={
    'profile':false,
    'professional':false,
    'account':false
  }
  userProfile = {
    firstName: "John",
    lastName: "Doe",
    address: "123 Street, Mumbai",
    phone: "+91 98765 43210",
    email: "john.doe@example.com",
    gender: "Male",
    dob: "1995-03-15"
  };

  professionalDetails = {
    skills: "Java, Angular, C#",
    experience: "5 Years",
    id: "12345",
    role: "Manager"
  };

  accountDetails = {
    username: "john_doe",
    password: "password123"
  };

  workDetails = [
    { id: 101, task: "Project A - Task 1" },
    { id: 102, task: "Project B - Task 2" },
    { id: 103, task: "Project C - Task 3" }
  ];
  

  toggleEditP(on:boolean) {
    this.IsEdit.profile = on;
  }
  toggleEditPro(on:boolean) {
    this.IsEdit.professional = on;
  }
  toggleEditA(on:boolean) {
    this.IsEdit.account = on;
  }
}


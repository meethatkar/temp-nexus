import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { user } from '../../../model/user.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  states: string[] = ['Maharashtra', 'Karnataka', 'Gujarat'];
  cities: string[] = ['Ahmedabad', 'Surat', 'Vadodara','Bangalore', 'Mysore', 'Mangalore','Mumbai', 'Pune', 'Nagpur'];
  userObj:user=new  user();
  IsMatch:boolean=false;  
  passwordVisible: boolean = false;

  // router=inject(Router);
  constructor(private router:Router){}

  onStateChange(event: any) {
      const selectedState = event.target.value;
      if (selectedState === 'Maharashtra') {
          this.cities = ['Mumbai', 'Pune', 'Nagpur'];
      } else if (selectedState === 'Karnataka') {
          this.cities = ['Bangalore', 'Mysore', 'Mangalore'];
      } else if (selectedState === 'Gujarat') {
          this.cities = ['Ahmedabad', 'Surat', 'Vadodara'];
      }
  }

  comparePassword(pws:string,cPws:string){
    if(pws===cPws){
      this.IsMatch=true;
    }
    else{
      this.IsMatch=false;
    }
  }

  onRegister(regiData:NgForm){
    // all register logic here 
    try{
      // this.userObj.isLogin=true;
      this.userObj.firstName=regiData.value.fname;
      this.userObj.lastName=regiData.value.lname;
      this.userObj.email=regiData.value.email;
      this.userObj.phoneNumber=regiData.value.phoneNumber;
      this.userObj.address=regiData.value.address;
      this.userObj.password=regiData.value.password;
      this.userObj.userName=regiData.value.username;
      localStorage.setItem('user',JSON.stringify(this.userObj)); //stored user class's object filled with lastet data
      localStorage.setItem('isLoggedIn','true');
      alert("Registration Successful");
      this.router.navigate(['/question']);
    }
    catch(r){
      console.log(r);
    }
  }



  togglePassword(): void {
    this.passwordVisible=!this.passwordVisible;
  }
}

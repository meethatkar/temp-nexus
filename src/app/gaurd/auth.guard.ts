import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  let isLoggedIn=localStorage.getItem('isLoggedIn');
  if(isLoggedIn=='false'){
    alert("Please login first");
    router.navigate(['/userLogin']);
    return false;
  }  
  return true;
};


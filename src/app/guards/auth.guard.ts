import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Get the user role from localStorage
  const userRole = localStorage.getItem('role');

  // Define your route's allowed roles (this should be dynamic depending on the route)
  const allowedRoles = route.data['roles'] as string[];

  //
  // If no role is found or the role is not authorized, redirect to login
  if (!userRole || !allowedRoles.includes(userRole)) {
    router.navigate(['/login'], { replaceUrl: true }); // prevents navigating back
    return false;
  }
  
  // If role is valid, allow navigation
  return true;
};

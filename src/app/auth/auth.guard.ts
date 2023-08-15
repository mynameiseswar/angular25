import { inject } from '@angular/core';
import { CanActivateFn, CanDeactivateFn } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthenticationService).canIActive();
};

export const candeactiveGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  console.log("okay")
  return true;
};


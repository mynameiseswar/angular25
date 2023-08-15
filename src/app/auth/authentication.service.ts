import { Injectable, inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class UserToken{

}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isUserLogin:boolean = false;

  constructor(

  ) { }

  setUserStatus(statu: boolean){
    this.isUserLogin = statu;
  }

  getuserStatus(){
    return this.isUserLogin;
  }

  canIActive(){
    return this.isUserLogin == true ? true: false;
  }
 
}



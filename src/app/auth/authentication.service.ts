import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isUserLogin:boolean = false;

  constructor() { }

  setUserStatus(statu: boolean){
    this.isUserLogin = statu;
  }

  getuserStatus(){
    return this.isUserLogin;
  }
}

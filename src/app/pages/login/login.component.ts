import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService, UserInformation } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(
    private loginService: LoginService,
    private router: Router
  ){

  }


  // userName = new FormControl('');
  // password = new FormControl('');

  userObject: UserInformation = {
    userName: '',
    password: ''
  }


  userLogin(){
  

    this.loginService.userLogin(this.userObject).subscribe(
      (userInfomration: any) =>{
        if(userInfomration && userInfomration.hasOwnProperty('token')){
          this.router.navigate(['/product'])
        }
      }
    );
  }

}


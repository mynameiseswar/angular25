import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService, UserInformation } from './login.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(
    private loginService: LoginService,
    private router: Router,
    private authenticationService: AuthenticationService
  ){

  }


  // userName = new FormControl('');
  // password = new FormControl('');

  userObject: UserInformation | any = {
    userName: '',
    password: ''
  }


  userLogin(){
  

    this.loginService.userLogin(this.userObject).subscribe(
      (userInfomration: any) =>{
        if(userInfomration && userInfomration.hasOwnProperty('token')){
          this.authenticationService.setUserStatus(true);
          this.router.navigate(['/product'])
        }
      }
    );
  }

}


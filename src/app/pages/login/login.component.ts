import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';
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
    private authenticationService: AuthenticationService,
    private fb: FormBuilder
  ){

  }

 /*  userLoginFromGroup  = new FormGroup({
  username : new FormControl('', [Validators.required, Validators.minLength(5)]),
  password : new FormControl('', [Validators.required, Validators.minLength(5)]),
  address: new FormGroup({
      city: new FormControl(''),
      pincode: new FormControl('')
  }) */

  userLoginFromGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['',[Validators.required, Validators.minLength(5)]],
    address: this.fb.group({
      city: [''],
      pincode: ['']
    }),
    skils:this.fb.array([])
  });



  userObject: UserInformation | any = {
    userName: '',
    password: ''
  }

 


  userLogin(){
  
    console.log(this.fb)
    console.log(this.userLoginFromGroup.value)

    /* this.loginService.userLogin(this.userObject).subscribe(
      (userInfomration: any) =>{
        if(userInfomration && userInfomration.hasOwnProperty('token')){
          this.authenticationService.setUserStatus(true);
          this.router.navigate(['/product'])
        }
      }
    ); */
  }

}


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ){}

  userLogout(){
    this.authenticationService.setUserStatus(false);
    this.router.navigate(['/login'])
  }

}

import { Component } from '@angular/core';
import { RootService } from '../utils/root.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  providers: [RootService]
})
export class UserDetailsComponent {

  userInformation: any;
  constructor(
    private rootService: RootService
  ){

    //console.log(this.rootService.getSelectedUser());

    this.rootService.getSelectedUser().subscribe((data: any)=>{
      this.userInformation = data;
    })
  }
}

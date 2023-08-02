import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  //private selectedUser: any;
  private selectedUser = new Subject();
  constructor() { }

  setSelectedUser(userDetails: any){
    console.log(userDetails);
    // this.selectedUser = userDetails;
    this.selectedUser.next(userDetails);
  }

  getSelectedUser(): any{
    // return this.selectedUser;

    return this.selectedUser.asObservable();
  }
}

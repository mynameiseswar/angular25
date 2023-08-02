import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IButton } from '../sbutton/sbutton.component';
import { RootService } from '../utils/root.service';

export interface UserList{
  name: string;
  address: string;
  mobile?: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  // providers: [RootService]
})
export class UserListComponent {

  constructor(
    private rootService: RootService
  ){}

  @Input() userInformation: UserList  = {
    name: "Default",
    address : 'Default'
  };

  @Output() userSelected = new EventEmitter<IButton>();


  editButtonConfig: IButton = {
    title: 'Edit',
    class: 'green',
    action: 'Green'
  };

  deleteButtonConfig: IButton = {
    title: 'Delete',
    class: 'red',
    action: 'delete'
  }
  detailsButtonConfig: IButton = {
    title: 'Details',
    class: 'red',
    action: 'details'
  }

  showUserDetails(e: any){
    this.rootService.setSelectedUser(this.userInformation);
  }

}

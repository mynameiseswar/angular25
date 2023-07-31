import { Component, Input } from '@angular/core';
import { IButton } from '../sbutton/sbutton.component';

export interface UserList{
  name: string;
  address: string;
  mobile?: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() userInformation: UserList  = {
    name: "Default",
    address : 'Default'
  };


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

}

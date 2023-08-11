import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGroupComponent } from './user-group.component';
import { UserGroupRoutingModule } from './user-group-routing.module';



@NgModule({
  declarations: [
    UserGroupComponent
  ],
  imports: [
    CommonModule,
    UserGroupRoutingModule
  ]
})
export class UserGroupModule { }

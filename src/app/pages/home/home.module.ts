import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingMoudle } from './home-routing.module';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingMoudle
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }

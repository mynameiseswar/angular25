import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserGroupComponent } from "./user-group.component";

const routs: Routes  = [{
    path:'',
    component: UserGroupComponent
}];

@NgModule({
    imports:[RouterModule.forChild(routs)],
    exports:[RouterModule]
})

export class UserGroupRoutingModule{}
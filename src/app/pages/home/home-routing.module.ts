import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children:[
            {
                path: '',
                redirectTo: 'user-groups',
                pathMatch:'full'
            },
            {
                path: 'user-list',
                component: UserListComponent
        
            },
            {
                path: 'user-groups',
                loadChildren: () => import('./user-group/user-group.module').then((m)=>m.UserGroupModule)
            }
        ]
    }
];
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class HomeRoutingMoudle{}
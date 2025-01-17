import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { PublicComponent } from "./public.component";
import { LoginComponent } from "./auth/login/containers/containers/login/login.component";

const routes:Routes=[
    {path:'',component: PublicComponent,children:[
        {path:'',redirectTo:'login',pathMatch:'full'},
        {path:'login',component:LoginComponent}
        ]
    }
    ];

@NgModule({
    imports:[RouterModule.forChild(routes)],
        exports:[RouterModule]
        
})
  

export class PublicRoutingModule
{

}
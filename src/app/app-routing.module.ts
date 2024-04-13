import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes:Routes=[
  {path:'',component: AppComponent,children:[
      //{path:'',redirectTo:'public',pathMatch:'full'},
      {path:'',loadChildren:()=>import('./public/public.module').then (m=>m.PublicModuleModule)},
      {path:'intranet',loadChildren:()=>import('./intranet/intranet.module').then (m=>m.IntranetModule)}
      ]
  }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

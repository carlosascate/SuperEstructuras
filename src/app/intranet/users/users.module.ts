import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/shared/shared.module';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    
    UsersComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  providers: [
    
  ],
  
})
export class UsersModule { }

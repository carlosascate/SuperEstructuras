import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared/shared.module';
import { IntranetComponent } from './intranet.component';
import { IntranetRoutingModule } from './intranet-routing.module';

@NgModule({
  declarations: [
    IntranetComponent
    
  ],
  imports: [
    SharedModule,
    IntranetRoutingModule
  ],
  providers: [
    
  ],
  
})
export class IntranetModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import { ServiceRoutingModule } from './service-routing.module';
import { MaterialModule } from '../../material.module';



@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }

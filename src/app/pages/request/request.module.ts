import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request.component';
import { RequestRoutingModule } from './request-routing.module';
import { MaterialModule } from '../../material.module';



@NgModule({
  declarations: [RequestComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RequestRoutingModule
  ]
})
export class RequestModule { }

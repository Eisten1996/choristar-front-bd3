import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request.component';
import { RequestRoutingModule } from './request-routing.module';
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [RequestComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RequestRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class RequestModule {
}

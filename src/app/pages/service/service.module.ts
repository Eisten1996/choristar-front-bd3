import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import { ServiceRoutingModule } from './service-routing.module';
import { MaterialModule } from '../../material.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ServiceRoutingModule,
    MatDialogModule
  ]
})
export class ServiceModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { MaterialModule } from '../../material.module';
import { ClientRoutingModule } from './client-routing.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ClientRoutingModule,
    MatDialogModule
  ]
})
export class ClientModule {
}

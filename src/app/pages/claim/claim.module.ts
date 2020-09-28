import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimComponent } from './claim.component';
import { ClaimRoutingModule } from './claim-routing.module';
import { MaterialModule } from '../../material.module';


@NgModule({
  declarations: [ClaimComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ClaimRoutingModule
  ]
})
export class ClaimModule {
}

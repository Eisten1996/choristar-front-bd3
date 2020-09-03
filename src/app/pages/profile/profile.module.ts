import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MaterialModule } from '../../material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ProfileRoutingModule,
    MatGridListModule,
    MatTabsModule
  ]
})
export class ProfileModule { }

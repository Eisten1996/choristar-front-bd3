import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SideBarComponent],
  exports: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class SideBarModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu2Component } from './menu2.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [Menu2Component],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class Menu2Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';




@NgModule({
  imports: [
      CommonModule,
      MatButtonModule,
      MatCardModule,
      MatToolbarModule,
      MatInputModule,
      MatSidenavModule,
      MatIconModule,
      MatMenuModule,
      MatTableModule,
      MatPaginatorModule
  ],
  exports: [
      CommonModule,
      MatButtonModule,
      MatCardModule,
      MatToolbarModule,
      MatInputModule,
      MatSidenavModule,
      MatIconModule,
      MatMenuModule,
      MatTableModule,
      MatPaginatorModule
  ]

})
export class MaterialModule { }

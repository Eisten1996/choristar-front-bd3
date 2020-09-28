import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { Menu2Component } from './menu2/menu2.component';
import { ModalClientComponent } from './pages/service/modal-client/modal-client.component';
import { ModalClaimComponent } from './pages/claim/modal-claim/modal-claim.component';
import { ModalRequestComponent } from './pages/request/modal-request/modal-request.component';
import { ModalClientCreateComponent } from './pages/service/modal-client-create/modal-client-create.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent, Menu2Component, ModalClientComponent, ModalClaimComponent, ModalRequestComponent, ModalClientCreateComponent],
  entryComponents: [ModalClientComponent, ModalClaimComponent, ModalRequestComponent, ModalClientCreateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}

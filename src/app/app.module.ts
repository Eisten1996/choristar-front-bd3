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
import { ModalClientComponent } from './modal-client/modal-client.component';
import { ModalClaimComponent } from './modal-claim/modal-claim.component';
import { ModalRequestComponent } from './modal-request/modal-request.component';

@NgModule({
  declarations: [AppComponent, Menu2Component, ModalClientComponent, ModalClaimComponent, ModalRequestComponent],
  entryComponents: [ModalClientComponent, ModalClaimComponent, ModalRequestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

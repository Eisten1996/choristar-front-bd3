import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {Menu2Component} from './menu2/menu2.component';
import {HttpClientModule} from '@angular/common/http';
import {ModalClientComponent} from "./modal-client/modal-client.component";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [AppComponent, Menu2Component, ModalClientComponent],
  entryComponents: [ModalClientComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

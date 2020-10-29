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
import { ModalClientComponent } from './pages/client/modal-client/modal-client.component';
import { ModalClaimComponent } from './pages/claim/modal-claim/modal-claim.component';
import { ModalRequestComponent } from './pages/request/modal-request/modal-request.component';
import { ModalClientCreateComponent } from './pages/client/modal-client-create/modal-client-create.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ModalClaimCreateComponent } from './pages/claim/modal-claim-create/modal-claim-create.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ModalRequestCreateComponent } from './pages/request/modal-request-create/modal-request-create.component';

@NgModule({
  declarations: [
    AppComponent,
    Menu2Component,
    ModalClientComponent,
    ModalClaimComponent,
    ModalRequestComponent,
    ModalClientCreateComponent,
    ModalClaimCreateComponent,
    ModalRequestCreateComponent],
  entryComponents: [
    ModalClientComponent,
    ModalClaimComponent,
    ModalRequestComponent,
    ModalClientCreateComponent,
    ModalClaimCreateComponent,
    ModalRequestCreateComponent],
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
    MatNativeDateModule,
    MatAutocompleteModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}

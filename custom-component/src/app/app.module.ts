import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextboxComponent } from './input/textbox/textbox.component';
import { DropdownComponent } from './input/dropdown/dropdown.component';
import { PasswordComponent } from './input/password/password.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TextboxComponent,
    DropdownComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

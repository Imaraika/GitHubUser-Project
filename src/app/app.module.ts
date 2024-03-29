import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCompComponent } from './form-comp/form-comp.component';
import { UserInfoCompComponent } from './user-info-comp/user-info-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCompComponent,
    UserInfoCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

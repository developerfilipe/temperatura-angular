import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './modules/chover/page/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppChoverCardComponent } from './modules/chover/components/app-chover-card/app-chover-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppChoverCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

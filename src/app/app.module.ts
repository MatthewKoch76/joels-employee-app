import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { TitleListComponent } from './components/title-list/title-list.component';
import { SharedModule } from './shared/shared.module';
import { MatToolbarModule, MatSidenavModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TitleListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

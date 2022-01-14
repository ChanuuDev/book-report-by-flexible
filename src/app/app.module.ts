import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Post01Component } from './posts/post01/post01.component';
import { NavigationComponent } from './rayouts/navigation/navigation.component';
import { FooterComponent } from './rayouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Post01Component,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

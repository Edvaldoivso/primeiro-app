import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import { NavigationModule } from './Navigation/navigation/navigation.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

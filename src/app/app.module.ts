import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InViewportModule } from '@thisissoon/angular-inviewport';
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    InViewportModule, 
    ScrollSpyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

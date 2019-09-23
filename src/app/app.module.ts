import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxScrollspyModule } from '@uniprank/ngx-scrollspy';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    NgxScrollspyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsappHeaderComponent } from './newsapp-header/newsapp-header.component';
import { NewsappFooterComponent } from './newsapp-footer/newsapp-footer.component';
import { NewsappHomeComponent } from './newsapp-home/newsapp-home.component';
import { NewsappContactUsComponent } from './newsapp-contact-us/newsapp-contact-us.component';
import { NewsappNewsService } from './newsapp-news.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsappHeaderComponent,
    NewsappFooterComponent,
    NewsappHomeComponent,
    NewsappContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    NewsappNewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HomepageComponent } from './homepage/homepage.component';
import { CommentModule } from './comment.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent, HomepageComponent],
  imports: [BrowserModule, AppRoutingModule, CommentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

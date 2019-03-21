import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeaturedemoComponent } from './components/featuredemo/featuredemo.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedemoComponent,
    ActorlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdventureModule } from './adventure/adventure.module';
import { AdventurerModule } from './adventurer/adventurer.module';
import { WorldModule } from './world/world.module';

@NgModule({
  imports: [
    AdventureModule,
    AdventurerModule,
    BrowserModule,
    WorldModule,
    // Must be last set of routes.
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

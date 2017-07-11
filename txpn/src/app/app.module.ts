import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdventurerModule } from './adventurer/adventurer.module';
import { WorldModule } from './world/world.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    WorldModule,
    AdventurerModule,
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

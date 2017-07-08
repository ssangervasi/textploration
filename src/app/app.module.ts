import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from 'app/app.component';
import { AdventurersComponent } from 'app/adventurers/adventurers.component';
import { AdventurerService } from 'app/adventurers/adventurer.service';
import { WorldsComponent } from 'app/worlds/worlds.component';
import { WorldDetailComponent } from 'app/worlds/world-detail.component';
import { WorldService } from 'app/worlds/world.service';

@NgModule({
  declarations: [
    AppComponent,
    AdventurersComponent,
    WorldsComponent,
    WorldDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'adventurers',
        component: AdventurersComponent,
      },
      {
        path: 'worlds',
        component: WorldsComponent,
      },
    ]),
  ],
  providers: [
    AdventurerService,
    WorldService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

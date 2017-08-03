import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WorldDetailComponent, } from './world-detail.component';
import { WorldListComponent } from './world-list.component';
import { WorldRoutingModule } from './world-routing.module';
import { WorldService } from './world.service';
import { Door } from './door';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // Door,
    WorldRoutingModule,
  ],
  declarations: [
    WorldListComponent,
    WorldDetailComponent,
  ],
  providers: [
    WorldService,
  ],
  exports: [
    // Door,
  ],
})
export class WorldModule { }

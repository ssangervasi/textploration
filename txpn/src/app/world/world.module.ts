import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WorldDetailComponent, } from './world-detail.component';
import { WorldListComponent } from './world-list.component';
import { WorldService } from './world.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    WorldListComponent,
    WorldDetailComponent,
  ],
  providers: [
    WorldService,
  ],
})
export class WorldModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'app/shared/shared.module';
import { AdventurerModule } from 'app/adventurer/adventurer.module';
import { WorldModule } from 'app/world/world.module';

import { AdventureService } from './adventure.service';
import { AdventureComponent } from './adventure.component';
import { AdventureRoutingModule } from './adventure-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    // AdventurerModule,
    // WorldModule,
    AdventureRoutingModule,
  ],
  declarations: [
    AdventureComponent,
  ],
  providers: [ AdventureService ],
})
export class AdventureModule { }

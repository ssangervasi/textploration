import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module'

import { AdventurerDetailComponent } from './adventurer-detail.component';
import { AdventurerListComponent } from './adventurer-list.component';
import { AdventurerRoutingModule } from './adventurer-routing.module';
import { AdventurerService } from './adventurer.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AdventurerRoutingModule,
  ],
  declarations: [
    AdventurerListComponent,
    AdventurerDetailComponent,
  ],
  providers: [
    AdventurerService,
  ],
})
export class AdventurerModule { }

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AdventurerListComponent } from './adventurer-list.component'
import { AdventurerService } from './adventurer.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    AdventurerListComponent,
  ],
  providers: [
    AdventurerService,
  ],
})
export class AdventurerModule { }

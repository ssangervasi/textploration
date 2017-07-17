import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'app/shared/shared.module';

import { AdventureComponent } from './adventure.component';
import { AdventureRoutingModule } from './adventure-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdventureRoutingModule,
  ],
  declarations: [
    AdventureComponent,
  ],
})
export class AdventureModule { }

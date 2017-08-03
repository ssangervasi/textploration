import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdventurerDetailComponent } from './adventurer-detail.component'
import { AdventurerListComponent } from './adventurer-list.component'

const routes: Routes = [
  { path: 'adventurer/:id',
    component: AdventurerDetailComponent,
  },
  { path: 'adventurer-list',
    component: AdventurerListComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AdventurerRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorldListComponent } from './world-list.component';

const routes: Routes = [
  { path: 'world-list',
    component: WorldListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldRoutingModule { }

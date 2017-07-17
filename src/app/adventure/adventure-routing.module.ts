import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdventureComponent } from './adventure.component';

const routes: Routes = [
  { path: 'adventure',
    component: AdventureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdventureRoutingModule { }

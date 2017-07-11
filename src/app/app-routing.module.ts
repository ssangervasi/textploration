import { NgModule, isDevMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdventurerListComponent } from 'app/adventurer/adventurer-list.component'
import { WorldListComponent } from 'app/world/world-list.component';

const appRoutes: Routes = [
  { path: 'adventure',
    component: AdventurerListComponent,
  },
  { path: 'adventurer-list',
    component: AdventurerListComponent,
  },
  { path: 'world-list',
    component: WorldListComponent,
  },
  { path: '',
    redirectTo: '/adventure',
    pathMatch: 'full',
  },
]
const routerOptions = { enableTracing: isDevMode() }

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, routerOptions),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }

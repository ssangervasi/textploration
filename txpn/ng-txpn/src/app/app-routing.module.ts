import { NgModule, isDevMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsoleComponent } from 'app/shared/console/console.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/adventurer-list',
    pathMatch: 'full',
  },
];
// const enableTracing: boolean = isDevMode();
const enableTracing: boolean = false;
const routerOptions = { enableTracing: enableTracing };

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, routerOptions),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }

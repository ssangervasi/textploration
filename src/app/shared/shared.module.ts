import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConsoleComponent } from './console/console.component';
import { ConsoleInputDirective } from './console/console-input.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ConsoleComponent,
    ConsoleInputDirective,
  ],
  exports: [
    ConsoleComponent,
    FormsModule,
  ],
})
export class SharedModule { }

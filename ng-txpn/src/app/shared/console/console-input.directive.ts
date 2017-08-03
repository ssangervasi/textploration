import {
  Directive,
  EventEmitter,
  Input,
  Output,
  HostListener,
} from '@angular/core';

import {
  ConsoleService,
  ConsoleCommand,
} from './console.service';

@Directive({
  selector: '[txpnConsoleInput]',
})
export class ConsoleInputDirective {
  
  constructor(private consoleService: ConsoleService) {
    console.log('Directive exists!');
  }

  @HostListener('keyup.enter') onEnter(): void {
    console.log('enter');
    this.consoleService.submit();
  }

  @HostListener('keyup.arrowup') onArrowUp(): boolean {
    console.log('arrowup');
    this.consoleService.upHistory();
    return false;
  }

  @HostListener('keyup.arrowdown') onArrowDown(): boolean {
    console.log('arrowdown');
    this.consoleService.downHistory();
    return false;
  }

}

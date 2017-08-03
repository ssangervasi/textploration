import { Component, OnInit } from '@angular/core';

import {
  ConsoleService,
  ConsoleCommand,
} from './console.service';

@Component({
  selector: 'txpn-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss'],
  providers: [ConsoleService],
})
export class ConsoleComponent implements OnInit {
  command: ConsoleCommand;
  history: ConsoleCommand[];

  constructor(public consoleService: ConsoleService) {
    console.log('Component exists!', this.consoleService);
    this.command = consoleService.getCommand();
    consoleService.commandUpdate$.subscribe(
      command => {
        this.command = command;
      });
    consoleService.commandSubmit$.subscribe(() => this.getHistory());
    this.getHistory();
  }

  getHistory(): void {
    this.history = this.consoleService.getHistory();
  }

  ngOnInit() { }

}

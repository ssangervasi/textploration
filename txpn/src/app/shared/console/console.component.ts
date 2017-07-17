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
  command: ConsoleCommand = new ConsoleCommand('');

  constructor(public consoleService: ConsoleService) {
    console.log('Component exists!');
    consoleService.commandUpdate$.subscribe(
      command => {
        this.command = command;
      });
  }

  ngOnInit() { }

}

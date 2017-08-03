import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

// TODO: Seperate file.
export class ConsoleCommand {
  constructor(
    public rawText: string = '',
    public isFromHistory: boolean = false,
  ) {}

  toString(): string {
    return `ConsoleCommand('${this.rawText}', ${this.isFromHistory})`;
  }

  copy(): ConsoleCommand {
    return new ConsoleCommand(this.rawText, this.isFromHistory);
  }
}

@Injectable()
export class ConsoleService {
  private commandHistory: ConsoleCommand[] = [];
  private historyIndex = -1;
  private command: ConsoleCommand;
  private tempCommand: ConsoleCommand;

  private commandUpdateSource = new Subject<ConsoleCommand>();
  private commandSubmitSource = new Subject<ConsoleCommand>();
  private commandResultSource = new Subject<string>();

  commandUpdate$ = this.commandUpdateSource.asObservable();
  commandSubmit$ = this.commandSubmitSource.asObservable();
  commandResult$ = this.commandResultSource.asObservable();

  constructor() {
    this.update(new ConsoleCommand());
  }

  getCommand(): ConsoleCommand {
    return this.command;
  }

  getHistory(): ConsoleCommand[] {
    return this.commandHistory;
  }

  update(command: ConsoleCommand): void {
    console.log(`Updating: ${command}`);
    // Prevent unneccessary event posting.
    if (command === this.command) {
      return;
    }
    this.command = command;
    if (!command.isFromHistory) {
      this.tempCommand = command;
    }
    this.commandUpdateSource.next(this.command);
  }

  submit(): void {
    console.log(`Submitting: ${this.command}`);
    this.commandSubmitSource.next(this.command);
    this.addToHistory(this.command);
    this.update(new ConsoleCommand());
  }

  addToHistory(command: ConsoleCommand): void {
    console.log(`Adding to history: ${command}`);
    if (!command.rawText) {
      return;
    }
    command.isFromHistory = true;
    this.commandHistory.push(command);
    this.historyIndex = -1;
  }

  getFromHistory(index: number): ConsoleCommand {
    console.log(`History: ${this.commandHistory}`);
    console.log(`Temp: ${this.tempCommand}`);
    let firstIndex = this.commandHistory.length - 1;
    if (this.commandHistory.length == 0
        || index < 0) {
      return this.tempCommand;
    } else if (index > firstIndex) {
      return this.commandHistory[0];
    } else {
      return this.commandHistory[firstIndex - index];
    }
  }

  upHistory(): void {
    let upCommand;
    let upIndex = this.historyIndex + 1;
    if (upIndex < this.commandHistory.length) {
      this.historyIndex = upIndex;
    }
    upCommand = this.getFromHistory(this.historyIndex);
    this.update(upCommand.copy());
  }

  downHistory(): void {
    let downCommand;
    let downIndex = this.historyIndex - 1;
    if (downIndex >= -1) {
      this.historyIndex = downIndex;
    }
    downCommand = this.getFromHistory(this.historyIndex);
    this.update(downCommand.copy());
  }

  updateFromHistory(deltaIndex = 1): void {
    // if (!this.command.isFromHistory) {
    //   this.tempCommand = this.command;
    // }
    // console.log(`Update from history: ${this.historyIndex} + ${deltaIndex} $`);
    // this.setHistoryIndex(this.historyIndex + deltaIndex);
    // if (deltaIndex < )
    // // let command;
    // // if (this.historyIndex == 0 &&
    // //     delta < 0) {
    // //   command = this.tempCommand;
    // // } else if (this.historyIndex > )
    // // else {
    // //   let oldCommand = this.getFromHistory();
    // // }
    // // if (command) {
    // //   this.update(command);
    // // }
  }

}

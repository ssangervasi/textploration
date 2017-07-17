import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

// TODO: Seperate file.
export class ConsoleCommand {
  constructor(
    public rawText: string,          
    public isFromHistory: boolean = false,
  ) {}

  toString(): string {
    return `ConsoleCommand('${this.rawText}', ${this.isFromHistory})`;
  }
}

@Injectable()
export class ConsoleService {
  private commandHistory: ConsoleCommand[] = [];
  private historyIndex = 0;
  private command: ConsoleCommand;

  private commandSubmitSource = new Subject<ConsoleCommand>();
  private commandUpdateSource = new Subject<ConsoleCommand>();
  private commandResultSource = new Subject<string>();

  commandSubmit$ = this.commandSubmitSource.asObservable();
  commandUpdate$ = this.commandUpdateSource.asObservable();
  commandResult$ = this.commandResultSource.asObservable();

  constructor() {
    this.update(new ConsoleCommand(''));
  }

  update(command: ConsoleCommand): void {
    console.log(`Updating: ${command}`);
    this.command = command;
    this.commandUpdateSource.next(this.command);
  }

  submit(): void {
    console.log(`Submitting: ${this.command}`);
    this.commandSubmitSource.next(this.command);
    this.addToHistory(this.command);
    this.update(new ConsoleCommand(''));
  }

  addToHistory(command: ConsoleCommand): void {
    console.log(`Adding to history: ${command}`);
    if (!command.rawText) {
      return;
    }
    this.commandHistory.push(command);
    this.setHistoryIndex(0);
  }

  getFromHistory(): ConsoleCommand {
    console.log(`History: ${this.commandHistory}`);
    if (this.commandHistory.length == 0) {
      return undefined;
    }
    let command = this.commandHistory[
      this.commandHistory.length - 1 - this.historyIndex];
    return command;
  }

  setHistoryIndex(index: number = 0): void {
    this.historyIndex = (
      Math.max(0, Math.min(this.commandHistory.length - 1,
                           index)));
    console.log(`Set history index: ${this.historyIndex}`);
  }

  upHistory(): void {
    this.updateFromHistory(+1);
  }

  downHistory(): void {
    this.updateFromHistory(-1);
  }

  updateFromHistory(deltaIndex = 1): void {
    console.log(`Update from history: ${this.historyIndex} + ${deltaIndex} $`);
    this.setHistoryIndex(this.historyIndex + deltaIndex);
    let oldCommand = this.getFromHistory();
    if (oldCommand) {
      this.update(new ConsoleCommand(oldCommand.rawText, true));
    }
  }  

}

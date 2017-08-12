// @flow
import React, { Component } from 'react';

import TextInput, { KeyHandler } from 'txpn/components/common/TextInput';
import { bindy } from 'txpn/utils';

export interface TxpnConsoleProps {
  prompt: string;

}

export interface TxpnConsoleState {
  command: string;
  tempCommand: string | void;
  history: Array<string>;
  historyIndex: number,
}

export default class TxpnConsole extends Component {
  props: TxpnConsoleProps;
  state: TxpnConsoleState;
  keyHandlers: Array<KeyHandler>;
  historyElement: Element;

  constructor(props: TxpnConsoleProps) {
    super(props);
    this.state = {
      command: '',
      tempCommand: undefined,
      history: [],
      historyIndex: 0,
    };
    bindy(this,
      this.setCommand,
      this.handleArrowUp,
      this.handleArrowDown,
      this.handleEnter,
    );
    this.keyHandlers = [
      { key: 'ArrowDown',
        handler: this.handleArrowDown,
      },
      { key: 'ArrowUp',
        handler: this.handleArrowUp,
      },
      { key: 'Enter',
        handler: this.handleEnter,
      },
    ];
  }

  /**
   * State maniuplation methods.
   */
  
  setCommand(value: string) {
    this.setState({
      command: value,
      tempCommand: undefined,
      historyIndex: -1,
    });
  }

  handleEnter() {
    this.setState(prevState => ({
      command: '',
      tempCommand: undefined,
      history: [...prevState.history, prevState.command],
      historyIndex: -1,
    }));
  }

  handleArrowDown(e: SyntheticKeyboardEvent) {
    this.setState(({ command, tempCommand, history, historyIndex}) => {
      if (history.length === 0 || historyIndex === -1) {
        return;
      } else if (historyIndex === history.length - 1) {
        return {
          command: tempCommand || command,
          historyIndex: -1,
        };
      }
      let newHistoryIndex = historyIndex + 1;
      return {
        historyIndex: newHistoryIndex,
        command: history[newHistoryIndex],
      };
    });
  }

  handleArrowUp(e: SyntheticKeyboardEvent) {
    this.setState(({ command, tempCommand, history, historyIndex}) => {
      if (history.length === 0 || historyIndex === 0) {
        return;
      }
      let newHistoryIndex = historyIndex - 1;
      let newTempCommand = tempCommand;
      if (historyIndex === -1) {
        newHistoryIndex = history.length - 1;
        newTempCommand = command;
      }
      return {
        historyIndex: newHistoryIndex,
        command: history[newHistoryIndex],
        tempCommand: newTempCommand,
      };
    });
  }

  /** 
   * Lifecycle methods.
   */
  
  componentDidUpdate() {
    this.scrollHistoryToBottom();
  }
  
  /**
   * Rendering methods.
   */

  createHistoryItems() {
    return this.state.history.map(
      (command, i) => (<li key={i}>{command}</li>)
    );
  }

  scrollHistoryToBottom() {
    this.historyElement.scrollTop = this.historyElement.scrollHeight;
  }

  render() {
    return (
      <div className="console">
        <div className="console__history"
             ref={historyElement => this.historyElement = historyElement}>
          <ol>
            {this.createHistoryItems()}
          </ol>
        </div>

        <div className="console__command-line">
          <label className="command-line__prompt"
                 id="idConsolePrompt"
                 htmlFor="idConsoleCommand">
            {this.props.prompt}$
          </label>
          <TextInput
            id="idConsoleCommand"
            value={this.state.command}
            setValue={this.setCommand}
            keyHandlers={this.keyHandlers}
          />
        </div>
      </div>  
    );
  }
}

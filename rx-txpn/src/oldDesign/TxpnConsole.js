// @flow
import React from 'react';

// $FlowFix:Destructuring
const TxpnConsole = ({command, history, adventurer}) => {
  const historyItems = history.map(
    command => (<li>{command.rawText}</li>)
  );
  return (
    <div class="console-container">
      <div class="console-history">
        <ol>
          {historyItems}
        </ol>
      </div>

      <div class="console-input">
        <label class="console-prompt"
               id="idConsolePrompt"
               htmlFor="idConsoleCommand">
          {adventurer.name}$
        </label>

        <input type="text"
               name="consoleCommand"
               id="idConsoleCommand"
               value={command.rawText}
        />
      </div>
    </div>  
  );
}

export default TxpnConsole;
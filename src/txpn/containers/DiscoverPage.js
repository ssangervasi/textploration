import React from 'react';

import gameEngine from 'txpn/runtime/gameEngine';
import ChooseWorldForm from 'txpn/components/world/ChooseWorldForm';

export default class DiscoverPage extends React.Component {
  render()  {
    const worlds = gameEngine.getWorlds();
    return (
      <section>
        <ChooseWorldForm worlds={worlds} handleSubmit={console.log}/>
      </section>
    );
  }
}

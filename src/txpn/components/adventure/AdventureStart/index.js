import React from 'react';
import {  Route, Switch } from 'react-router-dom';

import gameEngine from 'txpn/runtime/gameEngine';
import { AdventureStartSteps } from 'txpn/core/AdventureStartState';

import ForceRedirect from 'txpn/components/common/ForceRedirect';
import CreateExplorer from 'txpn/components/explorer/CreateExplorer';
import WorldList from 'txpn/components/discover/WorldList';

import StepList from './StepList';
import Done from './Done';

const { CREATE_EXPLORER, CHOOSE_WORLD, DONE } = AdventureStartSteps;

const subPathsByStep = {
  [CREATE_EXPLORER]: 'create-explorer',
  [CHOOSE_WORLD]: 'choose-world',
  [DONE]: 'done',
};

export default class AdventureStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: this.getNextStep(),
      done: false,
    };
  }

  /* Helpers */

  getNextStep() {
    return gameEngine.getStarted().getNextStep();
  }

  getExplorer() {
    return gameEngine.getStarted().explorer;
  }

  setExplorer(explorer) {
    gameEngine.getStarted().setExplorer(explorer);
  }

  getWorld() {
    return gameEngine.getStarted().world;
  }

  setWorld(world) {
    gameEngine.getStarted().setWorld(world);
  }

  getURLForCurrentStep() {
    if (this.state.done) {
      return '/adventure/continue';
    }
    const url = this.props.match.url;
    const tail = subPathsByStep[this.state.step];
    return `${url}/${tail}`;
  }

  getSteps() {
    const step = this.state.step;
    return [
      {
        title: 'Create your explorer',
        active: step === CREATE_EXPLORER,
        done: step !== CREATE_EXPLORER,
      },
      {
        title: 'Choose a world',
        active: step === CHOOSE_WORLD,
        done: step === DONE,
      },
      {
        title: 'Adventure!',
        active: step === DONE,
      },
    ];
  }

  /* Events */

  handleSubmitExplorer = explorer => {
    // TODO: Validate submission.
    this.setExplorer(explorer);
    this.setState({
      step: this.getNextStep(),
    });
  };

  handleSubmitWorld = world => {
    // TODO: Validate submission.
    this.setWorld(world);
    this.setState({
      step: this.getNextStep(),
    });
  };

  handleConfirmDone = () => {
    gameEngine.startAdventure();
    this.setState({ done: true });
  };

  handleRestart = () => {
    gameEngine.restartGetStarted();
    this.setState({ step: this.getNextStep() });
  };

  /* Rendering */

  render() {
    const path = this.props.match.path;
    const childUrl = this.getURLForCurrentStep();
    const steps = this.getSteps();
    return (
      <section>
        <h2>Get Started</h2>
        <section>
          <h3>Steps</h3>
          <StepList steps={steps} />
        </section>
        <section>
          <ForceRedirect fromPath={path} toURL={childUrl} />
          <Switch>
            <Route
              path={`${path}/${subPathsByStep[CREATE_EXPLORER]}`}
              render={() => (
                <CreateExplorer handleSubmit={this.handleSubmitExplorer} />
              )}
            />
            <Route
              path={`${path}/${subPathsByStep[CHOOSE_WORLD]}`}
              render={() => (
                <WorldList
                  worlds={gameEngine.getWorlds()}
                  submit={this.handleSubmitWorld}
                />
              )}
            />
            <Route
              path={`${path}/${subPathsByStep[DONE]}`}
              render={() => (
                <Done
                  world={this.getWorld()}
                  explorer={this.getExplorer()}
                  handleConfirm={this.handleConfirmDone}
                  handleRestart={this.handleRestart}
                />
              )}
            />
          </Switch>
        </section>
      </section>
    );
  }
}

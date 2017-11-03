import React from 'react';
import { Route, Switch } from 'react-router-dom';

import gameEngine from 'txpn/runtime/gameEngine';
import { AdventureStartSteps } from 'txpn/core/models/AdventureStartState';

import subscribeToProp from 'txpn/components/HOCs/subscribeToProp';
import ForceRedirect from 'txpn/components/common/ForceRedirect';
import StepList from 'txpn/components/common/StepList';

import CreateExplorerPage from './CreateExplorerPage';
import ChooseWorldPage from './ChooseWorldPage';
import Done from './Done';

const { CREATE_EXPLORER, CHOOSE_WORLD, DONE } = AdventureStartSteps;

const subPathsByStep = {
  [CREATE_EXPLORER]: 'create-explorer',
  [CHOOSE_WORLD]: 'choose-world',
  [DONE]: 'done',
};

class GetStartedPage extends React.Component {
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
    if (this.props.step === DONE) {
      return '/adventure/continue';
    }
    const url = this.props.match.url;
    const tail = subPathsByStep[this.props.step];
    return `${url}/${tail}`;
  }

  getSteps() {
    const step = this.props.step;
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
  };

  handleConfirmDone = () => {
    gameEngine.startAdventure();
  };

  handleRestart = () => {
    gameEngine.restartGetStarted();
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
                <CreateExplorerPage handleSubmit={this.handleSubmitExplorer} />
              )}
            />
            <Route
              path={`${path}/${subPathsByStep[CHOOSE_WORLD]}`}
              component={ChooseWorldPage}
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

const SubscribedGetStartedPage = subscribeToProp({
  prop: 'step',
  subject: gameEngine.adventureStartStepSubject,
})(GetStartedPage);
export { SubscribedGetStartedPage as default };

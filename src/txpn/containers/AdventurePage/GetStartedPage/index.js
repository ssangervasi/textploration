import React from 'react';
import { Route, Switch } from 'react-router-dom';

import gameEngine from 'txpn/runtime/gameEngine';
import gameState from 'txpn/runtime/gameState';
import { AdventureStartSteps } from 'txpn/core/models/AdventureStartState';

import subscribeToProp from 'txpn/components/HOCs/subscribeToProp';
import ForceRedirect from 'txpn/components/common/ForceRedirect';
import StepList from 'txpn/components/common/StepList';

import CreateExplorerPage from './CreateExplorerPage';
import ChooseWorldPage from './ChooseWorldPage';
import DonePage from './DonePage';

const { CREATE_EXPLORER, CHOOSE_WORLD, DONE } = AdventureStartSteps;

const subPathsByStep = {
  [CREATE_EXPLORER]: 'create-explorer',
  [CHOOSE_WORLD]: 'choose-world',
  [DONE]: 'done',
};

class GetStartedPage extends React.Component {
  /* Helpers */
  getURLForCurrentStep() {
    const step = this.props.adventureStart.getNextStep();
    // if (step === DONE) {
    //   return '/adventure/continue';
    // }
    const url = this.props.match.url;
    const tail = subPathsByStep[step];
    return `${url}/${tail}`;
  }

  getSteps() {
    const step = this.props.adventureStart.getNextStep();
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

  /* Rendering */

  render() {
    const path = this.props.match.path;
    const childURL = this.getURLForCurrentStep();
    const steps = this.getSteps();
    return (
      <section>
        <h2>Get Started</h2>
        <section>
          <h3>Steps</h3>
          <StepList steps={steps} />
        </section>
        <section>
          <ForceRedirect fromPath={path} toURL={childURL} />
          <Switch>
            <Route
              path={`${path}/${subPathsByStep[CREATE_EXPLORER]}`}
              component={CreateExplorerPage}
            />
            <Route
              path={`${path}/${subPathsByStep[CHOOSE_WORLD]}`}
              component={ChooseWorldPage}
            />
            <Route
              path={`${path}/${subPathsByStep[DONE]}`}
              component={DonePage}
            />
          </Switch>
        </section>
      </section>
    );
  }
}

const SubscribedGetStartedPage = subscribeToProp({
  prop: 'adventureStart',
  subject: gameState.adventureStart.subject,
})(GetStartedPage);
export { SubscribedGetStartedPage as default };

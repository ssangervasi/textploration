// @flow
import React, { Component } from 'react';
import type { ComponentType, ElementType } from 'react/react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import type { Match } from 'react-router-dom';

import { bindy } from 'txpn/utils';
import appState from 'txpn/store/appState';
import database from 'txpn/store/database';
import AdventureStartState, { AdventureStartSteps } from 'txpn/core/AdventureStartState';
import type { AdventureStartStep } from 'txpn/core/AdventureStartState';
import { Explorer, World } from 'txpn/core/models';

import ForceRedirect from 'txpn/components/common/ForceRedirect';
import CreateExplorer from 'txpn/components/explorer/CreateExplorer';
import WorldList from 'txpn/components/world/WorldList';

export default class AdventureStart extends Component {
  state: { step: AdventureStartStep };
  stepToNestedPathMap: Map<AdventureStartStep, string> = new Map([
    [AdventureStartSteps.CREATE_EXPLORER, 'create-explorer'],
    [AdventureStartSteps.CHOOSE_WORLD, 'choose-world'],
    [AdventureStartSteps.DONE, 'done'],
  ]);

  constructor(props: { match: Match }) {
    super(props)
    bindy(this,
      this.submitWorld,
      this.submitExplorer,
      this.CreateExplorer,
      this.ChooseWorld,
      this.Done,
    );
    this.state = {
      step: this.getNextStep(),
    };
  }

  /* Helpers */

  getNextStep(): AdventureStartStep {
    return appState.getStarted().getNextStep();
  }

  setExplorer(explorer: Explorer): void {
    appState.getStarted().setExplorer(explorer);
  }

  setWorld(world: World): void {
    appState.getStarted().setWorld(world);
  }

  /* Events */

  submitExplorer(explorer: Explorer): void {
    // TODO: Validate submission.
    this.setExplorer(explorer);
    this.setState({
      step: this.getNextStep(),
    });
  }

  submitWorld(world: World): void {
    // TODO: Validate submission.
    this.setWorld(world);
    this.setState({
      step: this.getNextStep(),
    });
  }

  /* Rendering */

  getURLForCurrentStep(): string {
    const url = this.props.match.url;
    const tail = this.stepToNestedPathMap.get(this.state.step) || '';
    return `${url}/${tail}`;
  }

  getSteps(): Array<Step> {
    return [
      { title: 'Create your explorer',
        active: (this.state.step === AdventureStartSteps.CREATE_EXPLORER),
        done: (this.state.step !== AdventureStartSteps.CREATE_EXPLORER),
      },
      { title: 'Choose a world',
        active: (this.state.step === AdventureStartSteps.CHOOSE_WORLD),
        done: (this.state.step === AdventureStartSteps.DONE),
      },
      { title: 'Adventure!',
        active: (this.state.step === AdventureStartSteps.DONE),
      },
    ];
  }

  CreateExplorer() {
    return <CreateExplorer submit={this.submitExplorer} />
  }

  ChooseWorld() {
    return (
      <WorldList worlds={database.worlds.getAll()}
                 submit={this.submitWorld} />
   );
  }

  Done() {
    return (
      <p>
        All done!&nbsp;
        <Link to='/adventure/continue'>
          Click here to adventure.
        </Link>
      </p>
    );
  }

  render() {
    const path = this.props.match.path;
    const childUrl = this.getURLForCurrentStep();
    const steps = this.getSteps();
    return (
      <div>
        <h2>Get Started</h2>
        <StepList steps={steps} />
        <ForceRedirect
          fromPath={path} 
          toURL={childUrl}
        />
        <Switch>
          <Route
            path={`${path}/choose-world`}
            component={this.ChooseWorld}
          />
          <Route
            path={`${path}/create-explorer`}
            component={this.CreateExplorer}
          />
          <Route
            path={`${path}/done`}
            component={this.Done}
          />
        </Switch>
      </div>
    );
  }
}

type Step = {
  title: string,
  done?: boolean,
  active?: boolean,
};

function StepList(props: { steps: Array<Step> }): ComponentType {
  const stepChildren = props.steps.map((step, index) => {
    const className = ([
        ['step-list__step', true],
        ['step-list__step--active', step.active],
        ['step-list__step--done', step.done],
      ]).map(([k, v]) => (v ? k : undefined)).filter(v => v).join(' ');
    return (<li key={index} className={className}>{step.title}</li>);
  });
  return (<ol className="step-list">{stepChildren}</ol>);
}
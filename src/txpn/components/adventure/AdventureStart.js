// 
import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import { bindy } from 'txpn/utils';
import gameEngine from 'txpn/store/gameEngine';
import AdventureStartState, { AdventureStartSteps } from 'txpn/core/AdventureStartState';
import { Explorer, World } from 'txpn/core/models';

import ForceRedirect from 'txpn/components/common/ForceRedirect';
import CreateExplorer from 'txpn/components/explorer/CreateExplorer';
import WorldList from 'txpn/components/world/WorldList';

export default class AdventureStart extends Component {
  stepToNestedPathMap = new Map([
    [AdventureStartSteps.CREATE_EXPLORER, 'create-explorer'],
    [AdventureStartSteps.CHOOSE_WORLD, 'choose-world'],
    [AdventureStartSteps.DONE, 'done'],
  ]);

  constructor(props) {
    super(props)
    bindy(this,
      this.submitWorld,
      this.submitExplorer,
      this.submitDone,
      this.CreateExplorer,
      this.ChooseWorld,
      this.Done,
    );
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

  /* Events */

  submitExplorer(explorer) {
    // TODO: Validate submission.
    this.setExplorer(explorer);
    this.setState({
      step: this.getNextStep(),
    });
  }

  submitWorld(world) {
    // TODO: Validate submission.
    this.setWorld(world);
    this.setState({
      step: this.getNextStep(),
    });
  }

  submitDone() {
    gameEngine.startAdventure();
    this.setState({ done: true });
  }

  /* Rendering */

  getURLForCurrentStep() {
    if (this.state.done) {
      return '/adventure/continue';
    }
    const url = this.props.match.url;
    const tail = this.stepToNestedPathMap.get(this.state.step) || '';
    return `${url}/${tail}`;
  }

  getSteps() {
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
      <WorldList
        worlds={gameEngine.database.worlds.getAll()}
        submit={this.submitWorld}
      />
   );
  }

  Done() {
    const explorer = this.getExplorer();
    const world = this.getWorld();
    if (explorer == null || world == null) {
      return (
        <div>
          <h3>Something went wrong!</h3>
          <p>
            <Link to='/adventure/start'>
              Click here to retry.
            </Link>
          </p>
        </div>
      );
    }
    return (
      <div>
        <h3>All ready!</h3>
        <p>
          Looks like <strong>{explorer.name}</strong> is
          going to <strong>{world.name}</strong>.
        </p>
        <p>
          <button className="button" onClick={this.submitDone}>
            Confirm and adventure!
          </button>
        </p>
      </div>
    );
  }

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
        </section>
      </section>
    );
  }
}


function StepList(
  { steps }) {
  const stepChildren = steps.map((step, index) => {
    const className = ([
        ['step-list__step', true],
        ['step-list__step--active', step.active],
        ['step-list__step--done', step.done],
      ])
      .map(([k, v]) => (v ? k : undefined))
      .filter(v => v)
      .join(' ');
    return (<li key={index} className={className}>{step.title}</li>);
  });
  return (<ol className="step-list">{stepChildren}</ol>);
}
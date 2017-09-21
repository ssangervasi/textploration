const AdventureStartSteps = {
  CREATE_EXPLORER: 'CREATE_EXPLORER',
  CHOOSE_WORLD: 'CHOOSE_WORLD',
  DONE: 'DONE',
};

class AdventureStartState {
  constructor(values) {
    if (values != null) {
      this.explorer = values.explorer;
      this.world = values.world;
    }
  }

  getNextStep() {
    if (this.explorer == null) {
      return AdventureStartSteps.CREATE_EXPLORER;
    } else if (this.world == null) {
      return AdventureStartSteps.CHOOSE_WORLD;
    } else {
      return AdventureStartSteps.DONE;
    }
  }

  setExplorer(explorer) {
    this.explorer = explorer.save();
  }

  setWorld(world) {
    this.world = world;
  }
}

export { AdventureStartState as default, AdventureStartSteps };

import { Injectable } from '@angular/core';

import { Adventurer } from 'app/adventurer/adventurer';
import { AdventurerService } from 'app/adventurer/adventurer.service';

import { World } from 'app/world/world';
import { WorldService } from 'app/world/world.service';

@Injectable()
export class AdventureService {
  adventurer: Adventurer;
  world: World;

  constructor(
    public adventurerService: AdventurerService,
    public worldService: WorldService,
  ) {
  }

  getAdventurer(): Promise<Adventurer> {
    if (this.adventurer) {
      return Promise.resolve(this.adventurer);
    }
    return this.adventurerService.getAdventurer().then(
      adventurer => {
        this.adventurer = adventurer;
        return adventurer;
      });
  }

  getWorld(): Promise<World> {
    if (this.world) {
      return Promise.resolve(this.world);
    }
    return this.worldService.getWorlds().then(
      worlds => {
        this.world = worlds[0];
        return this.world;
      });
  }
}

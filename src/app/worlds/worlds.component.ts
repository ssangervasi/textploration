import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { Adventurer } from 'app/adventurers/adventurer'
import { AdventurerService } from 'app/adventurers/adventurer.service'

import { World } from './world'
import { WorldService } from './world.service'

@Component({
  selector: 'txpn-worlds',
  templateUrl: './worlds.component.html',
  styleUrls: ['./worlds.component.css'],
  // providers: [WorldService, AdventurerService],
  providers: [WorldService],
})
export class WorldsComponent implements OnInit, OnDestroy {
  adventurer: Adventurer;
  adventurerSubscription: Subscription;
  worlds: World[];
  selectedWorld: World;

  constructor(private worldService: WorldService,
              private adventurerService: AdventurerService) {}

  ngOnInit(): void {
    this.getWorlds();
    this.subscribeToAdventurer();
  }

  ngOnDestroy() {
    this.adventurerSubscription.unsubscribe();
  }

  getWorlds(): void {
    this.worldService.getWorlds().then(
      worlds => this.worlds = worlds
    );
  }

  subscribeToAdventurer(): void {
    this.adventurer = this.adventurerService.getAdventurer();
    this.adventurerSubscription = this.adventurerService.newAdventurer$.subscribe(
      adventurer => this.adventurer = adventurer
    );
  }

  onSelectWorld(world: World): void {
    this.selectedWorld = world;
  }

}

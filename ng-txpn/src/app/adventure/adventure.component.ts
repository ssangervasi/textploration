import { Component, OnInit } from '@angular/core';

import { Adventurer } from 'app/adventurer/adventurer';
import { World } from 'app/world/world';
import { Region } from 'app/world/region';
import { Door } from 'app/world/door';
import { Room } from 'app/world/Room';

import { AdventureService } from './adventure.service';

@Component({
  selector: 'txpn-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss'],
})
export class AdventureComponent implements OnInit {
  adventurer: Adventurer;
  world: World;
  region: Region;
  room: Room;

  constructor(private adventureService: AdventureService) {
  }

  ngOnInit() {
    this.initAdventurer();
    this.initWorld();
  }

  initAdventurer(): void {
    this.adventureService.getAdventurer().then(adventurer => {
      this.adventurer = adventurer;
    });
  }

  initWorld(): void {
    this.adventureService.getWorld().then(world => {
      this.world = world;
      this.region = this.world.regions[0];
      this.room = this.region.rooms[0];
    });
  }

  openDoor(door: Door): void {
    this.room = door.destination;
  }

}

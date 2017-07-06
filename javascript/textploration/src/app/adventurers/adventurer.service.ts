import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { resolveLater } from 'app/utils/async';

import { Adventurer } from './adventurer';


class Subscription {

}

@Injectable()
export class AdventurerService {
  private adventurer: Adventurer;
  private newAdventurerSource = new Subject<Adventurer>();

  newAdventurer$ = this.newAdventurerSource.asObservable();

  getAdventurer(): Adventurer {
    return this.adventurer || new Adventurer('');
  }

  setAdventurer(adventurer: Adventurer): void {
    this.adventurer = adventurer;
    this.newAdventurerSource.next(this.adventurer);
  }
}
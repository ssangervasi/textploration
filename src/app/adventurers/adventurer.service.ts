import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { resolveLater } from 'app/utils/async';

import { Adventurer } from './adventurer';

@Injectable()
export class AdventurerService {
  private adventurer: Adventurer;
  private newAdventurerSource = new Subject<Adventurer>();

  newAdventurer$ = this.newAdventurerSource.asObservable();

  createDefaultAdventurer(): Adventurer {
    return new Adventurer('');
  }

  getAdventurer(): Adventurer {
    if (!this.adventurer) {
      this.adventurer = this.createDefaultAdventurer();
    }
    return this.adventurer;
  }

  setAdventurer(adventurer: Adventurer): void {
    this.adventurer = adventurer;
    this.newAdventurerSource.next(this.adventurer);
  }
}
import { Component, OnInit } from '@angular/core';

import { Adventurer } from './adventurer';
import { AdventurerService } from './adventurer.service';

@Component({
  selector: 'txpn-adventurer-list',
  templateUrl: './adventurer-list.component.html',
  styleUrls: ['./adventurer-list.component.css'],
})
export class AdventurerListComponent implements OnInit {
  adventurer: Adventurer;

  constructor(private adventurerService: AdventurerService) {}

  ngOnInit(): void {
    this.getAdventurer();
  }

  getAdventurer(): void {
    this.adventurer = this.adventurerService.getAdventurer();
  }

  onSelectAdventurer(adventurer: Adventurer): void {
    this.adventurerService.setAdventurer(adventurer);
    this.getAdventurer();
  }
}

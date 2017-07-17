import { Component, OnInit } from '@angular/core';

import { Adventurer } from './adventurer';
import { AdventurerService } from './adventurer.service';

@Component({
  selector: 'txpn-adventurer-detail',
  templateUrl: './adventurer-detail.component.html',
  styleUrls: ['./adventurer-detail.component.scss'],
})
export class AdventurerDetailComponent implements OnInit {
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

import { Component, Input } from '@angular/core';
import { World } from './world';

@Component({
  selector: 'txpn-world-detail',
  templateUrl: './world-detail.component.html',
  // styleUrls: ['./world-detail.component.css']
  styleUrls: []
})
export class WorldDetailComponent {
  @Input() world: World;
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AdventurerService } from 'app/adventurers/adventurer.service';

import { WorldService } from './world.service';
import { WorldsComponent } from './worlds.component';
import { WorldDetailComponent } from './world-detail.component';

describe('WorldsComponent', () => {
  let component: WorldsComponent;
  let fixture: ComponentFixture<WorldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WorldsComponent,
        WorldDetailComponent,
      ],
      imports: [ FormsModule ],
      providers: [
        AdventurerService,
        WorldService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

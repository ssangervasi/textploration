import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AdventurerService } from 'app/adventurer/adventurer.service';

import { WorldService } from './world.service';
import { WorldListComponent } from './world-list.component';
import { WorldDetailComponent } from './world-detail.component';

describe('WorldListComponent', () => {
  let component: WorldListComponent;
  let fixture: ComponentFixture<WorldListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WorldListComponent,
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
    fixture = TestBed.createComponent(WorldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

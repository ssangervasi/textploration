import {
  ComponentFixture,
  TestBed,
  async,
  inject,
} from '@angular/core/testing';

import { SharedModule } from 'app/shared/shared.module';

import { AdventurerModule } from './adventurer.module';
import { Adventurer } from './adventurer';
import { AdventurerService } from './adventurer.service';
import { AdventurerDetailComponent } from './adventurer-detail.component';

describe('AdventurerDetailComponent', () => {
  let component: AdventurerDetailComponent;
  let fixture: ComponentFixture<AdventurerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        AdventurerModule,
      ],
      providers: [
        AdventurerService
        // {
        //   provide: AdventurerService,
        //   useValue: new AdventurerServiceMock(),
        // },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventurerDetailComponent);
    component = fixture.componentInstance;
    // adventurerService = fixture.debugElement.injector.get(AdventurerService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should get the adventurer', () => {
    fixture.detectChanges();
    expect(component.adventurer).toBeTruthy('Wrong adventurer.');
  });
});

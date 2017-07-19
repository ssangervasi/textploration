import {
  ComponentFixture,
  TestBed,
  async,
  inject,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Adventurer } from './adventurer';
import { AdventurerService } from './adventurer.service';
import { AdventurerServiceMock } from './adventurer.service.mock';
import { AdventurerDetailComponent } from './adventurer-detail.component';

describe('AdventurerDetailComponent', () => {
  let component: AdventurerDetailComponent;
  let fixture: ComponentFixture<AdventurerDetailComponent>;
  let adventurerService: AdventurerServiceMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdventurerDetailComponent,
      ],
      imports: [ FormsModule ],
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
    adventurerService = fixture.debugElement.injector.get(AdventurerService);
    // spyAdventurerService = new SpyAdventurerService(
    //   fixture.debugElement.injector.get(AdventurerService),
    //   spyOn
    // );
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should get the adventurer', () => {
    fixture.detectChanges();
    expect(component.adventurer).toBeTruthy('Wrong adventurer.');
    // expect(adventurerService.getAdventurer).toHaveBeenCalled();
  });
});

// class SpyAdventurerService {
//   adventurer: Adventurer;

//   constructor(public service: AdventurerService,
//               spyOn: (..._) => jasmine.Spy) {
//               // spyOn: Function => jasmine.Spy) {
//     this.adventurer = new Adventurer('test adventurer');
//     spyOn(service, 'getAdventurer')
//       .and.returnValue(this.adventurer);  
//     spyOn(service, 'setAdventurer')
//       .and.callThrough();
//   }
// }
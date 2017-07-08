import { ComponentFixture, TestBed,
         async, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Adventurer } from './adventurer';
import { AdventurerService } from './adventurer.service';
import { AdventurersComponent } from './adventurers.component';

describe('AdventurersComponent', () => {
  let component: AdventurersComponent;
  let fixture: ComponentFixture<AdventurersComponent>;
  let spyAdventurerService: SpyAdventurerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdventurersComponent,
      ],
      imports: [ FormsModule ],
      providers: [ AdventurerService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventurersComponent);
    component = fixture.componentInstance;
    
    spyAdventurerService = new SpyAdventurerService(
      fixture.debugElement.injector.get(AdventurerService),
      spyOn
    );
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should get the adventurer', () => {
    expect(component.adventurer)
      .toBe(spyAdventurerService.adventurer, 'Wrong adventurer.');
    expect(spyAdventurerService.service.getAdventurer).toHaveBeenCalled();
  });
});

class SpyAdventurerService {
  adventurer: Adventurer;

  constructor(public service: AdventurerService,
              spyOn: (..._) => jasmine.Spy) {
              // spyOn: Function => jasmine.Spy) {
    this.adventurer = new Adventurer('test adventurer');
    spyOn(service, 'getAdventurer')
      .and.returnValue(this.adventurer);  
    spyOn(service, 'setAdventurer')
      .and.callThrough();
  }
}
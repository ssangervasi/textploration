import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventurerListComponent } from './adventurer-list.component';

describe('AdventurerListComponent', () => {
  let component: AdventurerListComponent;
  let fixture: ComponentFixture<AdventurerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventurerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventurerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

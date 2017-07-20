import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from 'app/shared/shared.module';

import { AdventurerModule } from './adventurer.module';
import { AdventurerListComponent } from './adventurer-list.component';

describe('AdventurerListComponent', () => {
  let component: AdventurerListComponent;
  let fixture: ComponentFixture<AdventurerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        AdventurerModule,
      ],
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

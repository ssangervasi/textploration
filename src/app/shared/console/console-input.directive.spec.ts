import {
  Component,
} from '@angular/core';
import {
  By,
} from '@angular/platform-browser';
import {
  TestBed,
  async,
  inject,
} from '@angular/core/testing';

import { ConsoleInputDirective } from './console-input.directive';
import { ConsoleService } from './console.service';

@Component({
  template: `<input txpnConsoleInput>`,
  providers: [ConsoleService],
})
class ConsoleTestComponent { }

describe('ConsoleInputDirective', () => {
  let fixture; 
  let component;
  let directiveEl;
  let directive;
  let consoleServiceSpy; 

  beforeEach(async(() => {
    let consoleService = jasmine.createSpyObj(
      'consoleService', [
        'submit', 'upHistory', 'downHistory'
    ]);
    TestBed.configureTestingModule({
      declarations: [
        ConsoleTestComponent,
        ConsoleInputDirective,
      ],
      // providers: [ ConsoleService ],
    })
    .overrideComponent(ConsoleTestComponent, {
      set: {
        providers: [
          { provide: ConsoleService,
            useValue: consoleService,
          }
        ],
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsoleTestComponent);
    fixture.detectChanges();
    consoleServiceSpy = fixture.debugElement.injector.get(ConsoleService);
    directiveEl = fixture.debugElement.query(By.directive(ConsoleInputDirective));
    directive = directiveEl.injector.get(ConsoleInputDirective);
  }));

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should send `submit` to service on `keyup.enter`', () => {
    directiveEl.nativeElement.dispatchEvent(
      new KeyboardEvent('keyup', {'key': 'enter'})
    );
    expect(consoleServiceSpy.submit).toHaveBeenCalled();
  });

  it('should send `downHistory` to service on `keyup.arrowdown`', () => {
    directiveEl.nativeElement.dispatchEvent(
      new KeyboardEvent('keyup', {'key': 'arrowdown'})
    );
    expect(consoleServiceSpy.downHistory).toHaveBeenCalled();
  });

  it('should send `upHistory` to service on `keyup.arrowup`', () => {
    directiveEl.nativeElement.dispatchEvent(
      new KeyboardEvent('keyup', {'key': 'arrowup'})
    );
    expect(consoleServiceSpy.upHistory).toHaveBeenCalled();
  });
});

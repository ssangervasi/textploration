import { Adventurer } from '.'

describe('adventurer constructor', () => {
  let a = new Adventurer('my name');
  
  it('should receive a name', () => {
    expect(a.name).toBe('my name');
  });

});

describe('silly boolean check', () => {
  let yes: boolean;

  // beforeEach(() => {
  //   yes = false;
  // });

  // it('should be false', () => {
  //   expect(yes).toBe(false);
  // });

  describe('sub boolean check', () => {
    beforeEach(() => {
      yes = true;
    });

    it('should be true', () => {
      expect(yes).toBe(true);
    });

    it('should still be true', () => {
      expect(yes).toBe(true);
    });
  })
});

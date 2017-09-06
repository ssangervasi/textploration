import { bindy, dedent, dd } from 'txpn/utils';

describe('bindy', () => {
  it('should bind functions to an object', () => {
    function fn1() {
      return this;
    }
    function fn2() {
      return this;
    }
    const obj = {};
    bindy(obj, fn1, fn2);
    expect(obj.fn1).toBeDefined();
    expect(obj.fn1()).toBe(obj);
    expect(obj.fn2).toBeDefined();
    expect(obj.fn2()).toBe(obj);
  });
});

describe('dedent', () => {
  it('should remove leading spaces', () => {
    expect(
      dedent(`
      first line
      middle line
      last line
    `)
    ).toBe(
      `first line
middle line
last line`
    );
  });
  it('should preserve inner indent', () => {
    expect(
      dedent(`
      first line
        indented line
      last line
    `)
    ).toBe(
      `first line
  indented line
last line`
    );
  });
});

describe('dd template tag', () => {
  it('should remove leading spaces', () => {
    expect(dd`
      first line
      middle line
      last line
    `).toBe(
      `first line
middle line
last line`
    );
  });
  it('should preserve inner indent', () => {
    expect(dd`
      first line
        indented line
      last line
    `).toBe(
      `first line
  indented line
last line`
    );
  });
});

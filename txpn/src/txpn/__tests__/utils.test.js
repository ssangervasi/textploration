import { fixIndent } from "txpn/utils";

describe("fixIndent", () => {
  it("should remove leading spaces", () => {
    expect(fixIndent(`
      first line
      middle line
      last line
    `)).toBe(
`first line
middle line
last line`);
  });
  it("should preserve inner indent", () => {
    expect(fixIndent(`
      first line
        indented line
      last line
    `)).toBe(
`first line
  indented line
last line`);
  });
});

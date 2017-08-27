describe("DateTime", function () {
  it("returns the current time when called with no arguments", function () {
    var lowerLimit = new Date().getTime();
    var offset = DateTime().offset;
    var upperLimit = new Date().getTime();

    expect(offset).not.toBeLessThan(lowerLimit);
    expect(offset).not.toBeGreaterThan(upperLimit);
  });
});

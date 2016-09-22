describe("Destroyer", function() {
  var destroyer;

  beforeEach(function() {
    destroyer = new Destroyer();
  });

  it("should have length of four squares", function() {
    expect(destroyer.size).toEqual(4);
  });

  it("should start with four health points", function() {
    expect(destroyer.hp).toEqual(4);
  });

  it("should take damage", function() {
    expect(destroyer.hp).toEqual(4);
    destroyer.hit();
    expect(destroyer.hp).toEqual(3);
  });

  it("knows when it is not sunk", function() {
    expect(destroyer.sunk()).toBe(false);
  });

  it("knows when it is sunk", function() {
    expect(destroyer.sunk()).toBe(false);
    for (var i = 0; i < 4; i++) {
      destroyer.hit();
    };
    expect(destroyer.sunk()).toBe(true);
  });
});

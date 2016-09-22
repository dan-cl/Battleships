describe("Submarine", function() {
  var submarine;

  beforeEach(function() {
    submarine = new Submarine();
  });

  it("should have length of three squares", function() {
    expect(submarine.size).toEqual(3);
  });

  it("should start with three health points", function() {
    expect(submarine.hp).toEqual(3);
  });

  it("should take damage", function() {
    expect(submarine.hp).toEqual(3);
    submarine.hit();
    expect(submarine.hp).toEqual(2);
  });

  it("knows when it is not sunk", function() {
    expect(submarine.sunk()).toBe(false);
  });

  it("knows when it is sunk", function() {
    expect(submarine.sunk()).toBe(false);
    submarine.hit();
    submarine.hit();
    submarine.hit();
    expect(submarine.sunk()).toBe(true);
  });


});

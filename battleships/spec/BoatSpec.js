describe("Boat", function() {
  var boat;

  beforeEach(function() {
    boat = new Boat();
  });

  it("should have length of two square", function() {
    expect(boat.size).toEqual(2);
  });

  it("should start with two health points", function() {
    expect(boat.hp).toEqual(2);
  });

  it("should take damage", function() {
    expect(boat.hp).toEqual(2);
    boat.hit();
    expect(boat.hp).toEqual(1);
  });

  it("knows when it is not sunk", function() {
    expect(boat.sunk()).toBe(false);
  });

  it("knows when it is sunk", function() {
    expect(boat.sunk()).toBe(false);
    boat.hit();
    boat.hit();
    expect(boat.sunk()).toBe(true);
  });


});

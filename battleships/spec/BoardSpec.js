describe("Board", function() {
  var board;

  beforeEach(function() {
    board = new Board();
  });

  it("should have a grid of ten rows", function() {
    expect(board.array.length).toEqual(10);
  });

  it("should have a grid of ten columns", function() {
    for (var i = 0; i < board.array.length; i++) {
      expect(board.array[i].length).toEqual(10);
    };
  });


});

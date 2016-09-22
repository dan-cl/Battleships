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

  describe("#placeShip", function(){

    beforeEach(function() {
      // board = new Board();
      // spyOn(board, "findCoordinates");
      // spyOn(board, "shipLength");
    });

    it("calculates the coordinates for the ship", function(){
      board = new Board();
      ship = jasmine.createSpyObj('ship', ['size']);
      spyOn(board, "findCoordinates");
      board.placeShip(ship);
      expect(board.findCoordinates).toHaveBeenCalled();
    });

    describe("#findCoordinates", function(){

      beforeEach(function() {
        board = new Board();
        spyOn(board, "findX");
        spyOn(board, "findY");
      });

      it("seperates the 'x' coordinate", function(){
        var position = "E8";
        board.findCoordinates(position);
        expect(board.findX).toHaveBeenCalledWith("E");
      });

      it("capitalises the 'x' coordinate", function(){
        var position = "e8";
        board.findCoordinates(position);
        expect(board.findX).toHaveBeenCalledWith("E");
      });

      it("seperates a single digit 'y' coordinate", function(){
        var position = "E8";
        board.findCoordinates(position);
        expect(board.findY).toHaveBeenCalledWith(8);
      });

      it("seperates a double digit 'y' coordinate", function(){
        var position = "E10";
        board.findCoordinates(position);
        expect(board.findY).toHaveBeenCalledWith(10);
      });

      describe("#findX", function(){

        beforeEach(function() {
          board = new Board();
        });

        it("converts letter references to an array position", function(){
          var position = "A8";
          board.findCoordinates(position);
          expect(board.xCoordinate).toEqual(0);
          var position = "J8";
          board.findCoordinates(position);
          expect(board.xCoordinate).toEqual(9);
        });
      });

      describe("#findY", function(){

        beforeEach(function() {
          board = new Board();
        });

        it("converts number references to an array position", function(){
          var position = "A1";
          board.findCoordinates(position);
          expect(board.yCoordinate).toEqual(0);
          var position = "A10";
          board.findCoordinates(position);
          expect(board.yCoordinate).toEqual(9);
        });
      });
    });
  });
});

(function(exports){

  function Board(){
    this.xCoordinate = 0;
    this.yCoordinate = 0;
    this.shipLength = 0;

    this.array = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  };

  Board.prototype.placeShip = function(ship, position, orientation) {
    this.shipLength = ship.size
    this.findCoordinates(position);
    this.checkOrientation(orientation);
  };

  Board.prototype.findCoordinates = function(position) {
    var xValue = position.charAt(0).toUpperCase();
    this.findX(xValue);
    var yValue = parseInt(position.slice(1));
    this.findY(yValue);
  };

  Board.prototype.findX = function(xValue) {
    this.xCoordinate = (xValue.charCodeAt(0) - 65)
  };

  Board.prototype.findY = function(yValue) {
    this.yCoordinate = yValue - 1
  };

  Board.prototype.checkOrientation = function(orientation){
    // var direction = orientation.toUpperCase();
    // window[direction]
  };


exports.Board = Board})(this);

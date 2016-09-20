(function(exports){

  function Boat(position){
    this.size = 2
    this.hp = 2
    this.destroyed = false
  }

  Boat.prototype.hit = function() {
    this.hp = this.hp - 1
    this.checkDamage()
  };

  Boat.prototype.checkDamage = function(){
    if (this.hp < 1) {
      this.destroyed = true
    };
  };

  Boat.prototype.sunk = function(){
    if (this.destroyed === true) {
      return true
    } else {
      return false
    };
  };

exports.Boat = Boat})(this);

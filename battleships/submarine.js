(function(exports){

  function Submarine(position){
    this.size = 3
    this.hp = 3
    this.destroyed = false
  }

  Submarine.prototype.hit = function() {
    this.hp = this.hp - 1
    this.checkDamage()
  };

  Submarine.prototype.checkDamage = function(){
    if (this.hp < 1) {
      this.destroyed = true
    };
  };

  Submarine.prototype.sunk = function(){
    if (this.destroyed === true) {
      return true
    } else {
      return false
    };
  };

exports.Submarine = Submarine})(this);

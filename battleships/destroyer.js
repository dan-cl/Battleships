(function(exports){

  function Destroyer(position){
    this.size = 4
    this.hp = 4
    this.destroyed = false
  }

  Destroyer.prototype.hit = function() {
    this.hp = this.hp - 1
    this.checkDamage()
  };

  Destroyer.prototype.checkDamage = function(){
    if (this.hp < 1) {
      this.destroyed = true
    };
  };

  Destroyer.prototype.sunk = function(){
    if (this.destroyed === true) {
      return true
    } else {
      return false
    };
  };

exports.Destroyer = Destroyer})(this);

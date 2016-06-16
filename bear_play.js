


var Bear = function(name, type, weight){
  this.name = name;
  this.type = type;
  this.weight = weight;

  this.totalWeight = function(deer){
    var stomach = []
    stomach.push(this.weight + deer.weight);
    return stomach
  };

  this.roar = function(){
    console.log('roar');
  };
};


Bear.prototype={
  roar: function(){
    console.log('roar');
  },
  totalWeight: function(deer){
    var stomach = []
    stomach.push(this.weight + deer.weight);
    return stomach
  };
};


module.exports = Bear;



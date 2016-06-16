var assert = require('chai').assert;
var Bear = require('../bear_play.js');
var Deer = require('../deer.js');

describe('bear', function(){

  var bear1 = new Bear('yogi', 'grizzly', 32);
  var deer1 = new Deer();

  it('should have a name', function(){
    assert.equal("yogi", bear1.name);
  });

  it('should have a type', function(){
    assert.equal("grizzly", bear1.type);
  });

  it('should have a weight', function(){
    assert.equal(32, bear1.weight);
  });

  it('should be able to roar', function(){
    assert.equal('roar', bear1.roar());
  });

  it('should eat and increase weight', function(){
    assert.deepEqual([42], bear1.totalWeight(deer1));
  });


 


});
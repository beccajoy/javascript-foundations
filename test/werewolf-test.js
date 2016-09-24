var assert = require('chai').assert;
var Werewolf = require('../exercises/werewolf');

describe('Werewolf', function () {

  it.skip('should be a function', function () {
    assert.isFunction(Werewolf);
  });

  it.skip('should instantiate our good friend, Werewolf', function () {
    var werewolf = new Werewolf();
    assert.isObject(werewolf);
  });

  it.skip('should have a name', function () {
    var werewolf = new Werewolf('Jorge');
    assert.equal(werewolf.name, 'Jorge');
  });

  it.skip('should have a location', function () {
    var werewolf = new Werewolf('Horace','Basement lair');
    assert.equal(werewolf.location, 'Basement lair');
  });

  it.skip('should default to human form', function () {
    var werewolf = new Werewolf('Mike','Basement lair');
    assert(werewolf.human);
  });

  it.skip('should refute human form after changing', function() {
    var werewolf = new Werewolf('Steve', 'Gusto');
    werewolf.change();
    assert(!werewolf.human);
  });

  it.skip('should show assert wolf form after change', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');
    assert(!werewolf.wolf);
    werewolf.change();
    assert(werewolf.wolf);
  });

  it.skip('should show what form its in', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');
    assert(!werewolf.wolf);
    werewolf.change();
    werewolf.change();
    assert(!werewolf.wolf);
    assert(werewolf.human);
    werewolf.change();
    assert(werewolf.wolf);
    assert(!werewolf.human);
  });

  it.skip('should start off not hungry', function() {
    //your code
  });

  it.skip('should become hungry after changing into werewolf form', function() {
    //your code
  });

  it.skip('should be able to eat(victim) once hungry', function() {
    //your code
  });

  it.skip('should not be hungry after changing back to human form', function() {
    //your code
  });

  it.skip('should change back to human form after eating', function() {
    //your code
  });

  it.skip('should not be able to consume victim in human form', function() {
    //your code
  });


});

describe('Victim', function () {

  it.skip('should be a function', function () {
    assert.isFunction(Victim);
  });

  it.skip('should instantiate our good friend, Victim', function () {
    var victim = new Victim();
    assert.isObject(victim);
  });

  it.skip('should have a name', function () {
    var victim = new Victim('Jorge');
    assert.equal(victim.name, 'Jorge');
  });

  it.skip('should start alive', function () {
    var werewolf = new Victim('TayTay');
    assert(werewolf.alive);
  });

  it.skip('should be dead after being eaten', function () {
    var werewolf = new Werewolf('TayTay');
    var victim = new Victim('TayTay');
    werewolf.change();
    werewolf.eat(victim);
    assert(!vicitm.alive);
  });

});

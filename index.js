var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat'
  return animal
}

function add2(n) {
  // Feel free to move things around!
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()
console.log(theFunk())


//function outerFunction() {
//  var innerVariable = "I'm sort of a secret.";
//
//  return function innerScope() {
//    var inaccessible = "Nothing can touch me.";
//
//    return innerVariable;
//  }
//}
//undefined
//var myScope = outerFunction();
//undefined
//myScope
//ƒ innerScope() {
//    var inaccessible = "Nothing can touch me.";
//
//    return innerVariable;
//  }
//myScope();
//"I'm sort of a secret."

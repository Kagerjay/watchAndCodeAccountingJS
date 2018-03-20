// window.sandwichJS has an originalValue
window.sandwichLibrary = 'Lbirary with books about sandwiches';

// SandwichJS loads
(function(){
  var breads = {
    wheat: 'The healthy option',
    white: 'The unhealthy option'
  };

  var fillings = {
    turkey: 'For boring sandwiches',
    cheese: 'For the vegetarians'
  };

  var sandwichLibrary = {
    breads: breads,
    fillings: fillings
  };

  if (typeof librarySystem !== 'undefined'){
    //handle LibrarySystem case
    librarySystem('sandwichLibrary', function(){
      return sandwichLibrary;
    });
  } else {
    // Handle window case
    var oldSandwichLibrary = window.sandwichLibrary; // temp save

    sandwichLibrary.noConflict = function(){
      window.sandwichLibrary = oldSandwichLibrary;
      return sandwichLibrary;
    };
    window.sandwichLibrary = sandwichLibrary;
  }
})();


debugger;
// This will reset window.sandwichLibrary to the original value.
// .noConflict will also return the sandwichLibrary object.
var sandwichJS = sandwichLibrary.noConflict();

// You want to print the string though
console.log(sandwichLibrary);

// We can still use sandwichJS
console.log(sandwichJS.breads.white);

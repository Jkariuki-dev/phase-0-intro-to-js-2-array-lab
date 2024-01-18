// Write your solution here!
function destructivelyPrependCat(Ralph) {
    cats.unshift("Oscar");
  }
  
  destructivelyPrependCat('Whiskers');

    let cats = ["Milo", "Otis", "Garfield"];
  
  function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
  }  
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
  }
  function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
  }
  function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
  }
  function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
  }
  function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
  }
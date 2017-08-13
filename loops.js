var superarray = ["Gary", "Matt", "Bo", "Jud"]

doWhileLoop(superarray)

function doWhileLoop (myarray) {
     maybeTrue();
     console.log(myarray);
  do{
    myarray.shift();
    console.log(myarray);
} while myarray.length > 0 && maybeTrue();
}

function maybeTrue() {
  return Math.random() >= 0.5
}

// Closures 
function makeMultiplier(multiplier) {
    //var multiplier = 2;
    function b(){
        console.log("Multiplier is:" + multiplier);
    } 
    b();

return (
    funtion (x) {
        return multiplier + x;
    }
  );
}

var doubleAll = makeMultiplier(2);
console.log (doubleAll(10)); 
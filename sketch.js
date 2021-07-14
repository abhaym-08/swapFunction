

var a = prompt("Enter a value");
var b = prompt("Enter another value")

function setup(){
b2 = createButton("Click here to Swap");
  
  }


function draw()
{
  b2.mousePressed(swap)
}
function swap(){
[a, b] = [b, a]
console.log(a)
console.log(b)
}
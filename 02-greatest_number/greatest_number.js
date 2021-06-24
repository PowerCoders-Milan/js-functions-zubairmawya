// define an arrow function that return the maximum between 3 random numbers
const maxNumber = (x, y, z) => {
    // use a conditional statement inside the function to understand wich number is the greatest one    
    // return the greatest number of the 3
    if (x >= y && x > z) {
        return(x) ;
        } 
        else if (y >= x && y > z) {
            return (y);
        } else {
            return (z);
     }
  }

// declare 3 variables and assign random numbers to them
let x= Math.ceil(Math.random()*100);
let y= Math.ceil(Math.random()*100);
let z= Math.ceil(Math.random()*100);
// call the function passing the numbers as arguments
console.log(x);
console.log(y);
console.log(z);
console.log(`${maxNumber(x, y, z)} is the greatest number`) //call the function inside the ${...}
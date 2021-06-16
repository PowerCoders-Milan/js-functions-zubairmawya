// define a function multiplyByNineFifths(number)
function multiplyByNineFifths(numbers) {
    return (numbers * 9/5);
    }
    //return number*(9/5)

// define a function getFahrenheit(celsius)
function getFahrenheit(celsius) {
    return (multiplyByNineFifths(celsius)  + 32);
}
    // return multiplyByNineFifths(celsius) + 32;

console.log(getFahrenheit(2)) // call getFahrenheit();


// do the same thing starting from Fahrenheit to Celsius
const subtract32 = z => {
return (z - 32);
}
const getCelsius = y => {
return (subtract32(y) * 5/9);
}
console.log(getCelsius(244))
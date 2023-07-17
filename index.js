/* 
so this was one way of calculating area and perimeter of a Rectangle using objects in js
now we will see how to do the same but using exports and require
const rectangle = {
    area : (l,b) => (l*b),
    perimeter : (l,b) => 2*(l+b)
}
*/

const rectangle = require('./rectangle')

const calcRectangle = (l,b) => {
    console.log(
        `
        The length of the Rectangle is ${l}
        The Breadth of the Rectangle is ${b} 
        `
    );
    console.log(
        `Area of Rectangle is `+ rectangle.area(l,b),
        `Area of Rectangle is ` + rectangle.perimeter(l,b)
    );
}

calcRectangle(7, 3)

console.log(__filename);
console.log(__dirname);
/* 
one way of doing is this
another way of doing the same is by using module.exports, so let's see that too

exports.area = (l,b) => (l*b)
exports.perimeter = (l,b) => 2*(l+b)
*/

const area = (l,b) => (l*b)
const perimeter = (l,b) => 2*(l+b)

module.exports.area = area;
module.exports.perimeter = perimeter;
/*
here .area refers to the variable area delcared in this scope
and = area refers to the object used in the './index.js' file in the console.log statement
'rectangle.area(l,b)' >> the .area is the area mentioned over here after the = in line no.12
*/
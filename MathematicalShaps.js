//2 a.
const squareDiagonalLength = (length) => length * Math.sqrt(2);
console.log("Area of square where the length is 9 =", squareDiagonalLength(9));

//2 b.
const triangleArea = (lengthA, lengthB, lengthC) => (lengthA * lengthB * lengthC) / 2;
console.log("Area of triangle where length of its sides is 5,6,7 =", triangleArea(5, 6, 7));

//2 c i
const PI = 3.14;
const circumference = (radius) => 2 * PI * radius;
console.log("Circumference of circle whose eradius is 4 =", circumference(4));

const surfaceArea = (radius) => PI * (radius * radius);
console.log("Surface area of circle whose radius is 4 =", surfaceArea(4));
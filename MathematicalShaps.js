//2 a.
const squareArea = (length) => length * length;
console.log("Area of square where the length is 9 =", squareArea(9));

//2 b.
const triangleArea = (lengthA, lengthB, lengthC) => lengthA * lengthB * lengthC;
console.log("Area of triangle where length of its sides is 5,6,7 =", triangleArea(5, 6, 7));

//2 c i
const PI = 3.14;
const circumference = (radius) => 2 * PI * radius;
console.log("Circuference ofd circele whos eradius is 4 =", circumference(4));

const surfaceArea = (radius) => PI * (radius * radius);
console.log("Surface area of circle whose radius is 4 =", surfaceArea(4));
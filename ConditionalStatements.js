//3a
const largerNum = (numA, numB) => {
    if (numA > numB) {
        return numA;
    } else {
        return numB;
    }
}

console.log("Number larger between 5 and 8 is :", largerNum(5, 8));
//b

const isOdd = (num) => {
    if (num % 2 == 0) {
        return "Even number"
    } else {
        return "Odd number"
    }
}

console.log("s 5 even or odd :", isOdd(5));
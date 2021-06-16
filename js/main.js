let myNum = 10;
let myStr = 'строка';
let myBool = true;
let myArr = [1, 2, 3, 4, 5];
let myObj = {
   first: 'First Name', 
   last: 'Last Name'
};

console.log (myObj);

let decimal2 = myNum.toFixed(2);
console.log (decimal2);

let i = 5;
console.log(++i);
console.log(i++);
console.log(i--);
console.log(--i);

let myTest = 20;
console.log(myTest += 10);
console.log(myTest -= 10);
console.log(myTest *= 10);
console.log(myTest /= 10);
console.log(myTest %= 10);

let myPi = Math.PI;
console.log(myPi);
let myRound = Math.round(89.279);
console.log(myRound);
let myRandom = Math.random() * 10;
console.log(myRandom);
let myPow = Math.pow(3,5);
console.log(myPow);

var strObj = {};
strObj.str = "Мама мыла раму, рама мыла маму";
strObj.length = strObj.str.length;
console.log(strObj);
let isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);

let strReplace = strObj.str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log('strReplace:', strReplace);
console.log(strObj.str.toLowerCase());
console.log(strObj.str.toUpperCase());
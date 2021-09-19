console.log("Practic");

// const numbers = [5, 10, 11, 21, 32, 1, 2, 3, 4, 100, 12, 55];

// forEach***************************

// numbers.forEach(function (number) {
//   console.log("number", number);
// });

// numbers.forEach((number) => console.log("number", number));

//map ***********************************

// const doubleNumArr = (arr) => arr.map((number) => number * 2);

//filter ***********************

// const filterNum = (numbers, n) => numbers.filter((number) => number > n);

// // console.log(filterNum(numbers, 10));
// // console.log(filterNum(numbers, 20));

// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
//   { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 9.67 },
// ];

// const filterRating = books.filter(({ rating }) => rating > 9);
// console.log(filterRating);

//find();//////////////////////////
// console.log("find()");
// const findElement = books.find(({ rating }) => rating > 7);
// console.log(findElement);

// //every()//////////////////////////////////
// console.log("every()");
// const isEvery = (n) => books.every(({ rating }) => rating > n);
// console.log(isEvery(7));
// console.log(isEvery(8));
// console.log(isEvery(6));

// //some()///////////////////////////
// console.log("some()");
// const isRating = (n) => books.some(({ rating }) => rating > n);
// console.log(isRating(9));
// console.log(isRating(10));
// console.log(isRating(2));

// //reduce//////////////////////
// console.log("reduce()");

// const sumRating = () => books.reduce((acc, { rating }) => acc + rating, 0);
// console.log(sumRating());

// const objA = {
//   x: 1,
// };

// console.log("objA => x =", objA.x);

// const objB = Object.create(objA);
// console.log(objB);

// objB.y = 2;

// console.log("objB => x =", objB.x);
// console.log("objB => y =", objB.y);

// const objC = Object.create(objB);

// console.log("objC =", objC);
// console.log("objC => x =", objC.x);
// console.log("objC => y =", objC.y);
// console.log(String === String);
// console.dir(String);

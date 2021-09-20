// JS
//task1***********************************************************************************
// 1. Напишите функцию deepEqual чтоб она проверяла что два объекта идентичны. Пример:
// deepEqual({ name: "test" }, { name: "test" }); // output true
// deepEqual({ name: "test" }, { name: "test1" }); // output false
// deepEqual({ name: "test" }, { name: "test", age: 10 }); // false

//**** solution ****/

// const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// console.log(deepEqual({ name: "test" }, { name: "test" }));
// console.log(deepEqual({ name: "test" }, { name: "test1" }));
// console.log(deepEqual({ name: "test" }, { name: "test", age: 10 }));

// task2**********************************************************************************
// 2. Напишите функцию chunkArray которая разбивает массив на подмассивы на заданное количество элементов. Пример:

// var result = chunkArray([1,2,3,4,5,6,7,8], 3);
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]

//**** solution ****/
// const chunkArray = (arr, n) => {
//   const newArr = [];
//   let chunkArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     chunkArr.push(arr[i]);

//     if (chunkArr.length === n) {
//       newArr.push(chunkArr);
//       chunkArr = [];
//     }
//   }

//   newArr.push(chunkArr);

//   return newArr;
// };

// const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
// console.log(result);

// task3**********************************************************************************
// 3. Напишите функцию обертку которая на вход принимает асинхронный метод и массив аргументов а отдает нам Promise с результатом. Пример:

// function asyncPlus(x, y, cb){
// 	setTimeout(() => cb(x + y), 1000)
// }
// toPromise(asyncPlus, [1,2]).then(console.log)
// Output: 3

//**** solution ****/

// task4**********************************************************************************
// 4. Напишите метод firstUnique который возвращает первый уникальный элемент в массиве. Пример:

// console.log(firstUnique([1,2,3,2,1,3,4,5,5])
// // output 4

//**** solution ****/
// const firstUnique = (arr) => {
//   const arrUniqueValue = arr.filter(
//     (el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el)
//   );

//   return arrUniqueValue[0];
// };

// console.log(firstUnique([1, 2, 3, 2, 1, 3, 4, 5, 5, 9]));

// task5**********************************************************************************
// 5. Напишите метод arrayToObject который возвращать объект(использовать рекурсию). Пример:

// var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];

// console.log(arrayToObject(arr))
// // Outputs: {
// 	name: 'developer',
// 	age: 5,
// 	skills: {
// 		html: 4,
// 		css: 5,
// 		js: 5
// 	}
// }

//**** solution ****/
const arr = [
  ["name", "developer"],
  ["age", 5],
  [
    "skills",
    [
      ["html", 4],
      ["css", 5],
      ["js", 5],
    ],
  ],
];

function arrayToObject(arr) {
  return Array.isArray(arr)
    ? arr.reduce(
        (obj, el) => (el && (obj[el[0]] = arrayToObject(el[1])), obj),
        {}
      )
    : arr;
}

// console.log(arrayToObject(arr));

//task7///////////////////////////////////////////////////////////////////////////////
// 7. Написать обратный метод(см. задачу 5) objectToArray который из объекта создаст массив. Пример:

//   objectToArray({
// 	name: 'developer',
// 	age: 5,
// 	skills: {
// 		html: 4,
// 		css: 5,
// 		js: 5
// 	}
// })

// Outputs: [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]]

const obj = {
  name: "developer",
  age: 5,
  skills: {
    html: 4,
    css: 5,
    js: 5,
  },
};

const objectToArray = (obj) => {
  const arr = [];

  for (let key in obj) {
    !(typeof obj[key] === "object")
      ? arr.push([key, obj[key]])
      : arr.push([key, objectToArray(obj[key])]);
  }

  return arr;
};

console.log(objectToArray(obj));

// task8**********************************************************************************
// 8. Сделать функцию которая сможет делать срез данных с ассоциативного массива и вернуть средние значение (округленное до 2 цифр после запятой).

// let testData3 = [{"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},{"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},{"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},{"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},{"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},{"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}]

// let result2 = array_pluck_avg(testData3, 'skills.php')

// Outputs: 3.1

//**** solution ****/

// let testData3 = [
//   {
//     name: "Vasya",
//     email: "vasya@example.com",
//     age: 20,
//     skills: { php: 0, js: -1, madness: 10, rage: 10 },
//   },
//   {
//     name: "Dima",
//     email: "dima@example.com",
//     age: 34,
//     skills: { php: 5, js: 7, madness: 3, rage: 2 },
//   },
//   {
//     name: "Colya",
//     email: "colya@example.com",
//     age: 46,
//     skills: { php: 8, js: -2, madness: 1, rage: 4 },
//   },
//   {
//     name: "Misha",
//     email: "misha@example.com",
//     age: 16,
//     skills: { php: 6, js: 6, madness: 5, rage: 2 },
//   },
//   {
//     name: "Ashan",
//     email: "ashan@example.com",
//     age: 99,
//     skills: { php: 0, js: 10, madness: 10, rage: 1 },
//   },
//   {
//     name: "Rafshan",
//     email: "rafshan@example.com",
//     age: 11,
//     skills: { php: 0, js: 0, madness: 0, rage: 10 },
//   },
// ];

// const array_pluck_avg = (arr, skill) => {
//   const skillArr = skill.split(".");

//   const sum = arr.reduce(
//     (acc, item) => acc + item[skillArr[0]][skillArr[1]],
//     0
//   );

//   return (sum / arr.length).toFixed(2);
// };

// let result2 = array_pluck_avg(testData3, "skills.php");
// let result3 = array_pluck_avg(testData3, "skills.js");
// let result4 = array_pluck_avg(testData3, "skills.madness");
// let result5 = array_pluck_avg(testData3, "skills.rage");

// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

//task9
// 9. Создайте прототип для String toTitleCase каждый первый символ строки переводит в верхний регистр. Пример:

// let x = 'test task'
// console.log(x.toTitleCase())
// // Outputs: Test Task

// if (!String.prototype.toTitleCase) {
//   String.prototype.toTitleCase = function () {
//     const arrStr = this.split(" ");
//     const newArrStr = [];

//     for (let i = 0; i < arrStr.length; i += 1) {
//       newArrStr.push(arrStr[i][0].toUpperCase() + arrStr[i].slice(1));
//     }

//     return newArrStr.join(" ");
//   };
// }

// let x = "test task";
// console.log(x.toTitleCase());

//task10///////////////////////////////////////////////////////////////////////////////
// 10. Создайте прототип который удаляет дубликаты из строки. Пример:

// let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double"
// x.removeDuplicate()
// Int32 Double

// let x =
//   "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";

// if (!String.prototype.removeDuplicate) {
//   String.prototype.removeDuplicate = function () {
//     const arrStr = this.split(" ");
//     const newArrStr = [];

//     for (let el of arrStr) {
//       if (!newArrStr.includes(el)) {
//         newArrStr.push(el);
//       }
//     }

//     return newArrStr.join(" ");
//   };
// }

// console.log(x.removeDuplicate());

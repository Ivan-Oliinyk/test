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

console.log(arrayToObject(arr));

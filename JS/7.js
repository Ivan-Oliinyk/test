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

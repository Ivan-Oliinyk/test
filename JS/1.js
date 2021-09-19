//  1. Напишите функцию deepEqual чтоб она проверяла что два объекта идентичны. Пример:
// deepEqual({ name: "test" }, { name: "test" }); // output true
// deepEqual({ name: "test" }, { name: "test1" }); // output false
// deepEqual({ name: "test" }, { name: "test", age: 10 }); // false

const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

console.log(deepEqual({ name: "test" }, { name: "test" }));
console.log(deepEqual({ name: "test" }, { name: "test1" }));
console.log(deepEqual({ name: "test" }, { name: "test", age: 10 }));

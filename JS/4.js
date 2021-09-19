// 4. Напишите метод firstUnique который возвращает первый уникальный элемент в массиве. Пример:

// console.log(firstUnique([1,2,3,2,1,3,4,5,5])
// // output 4

//**** solution ****/
const firstUnique = (arr) => {
  const arrUniqueValue = arr.filter(
    (el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el)
  );

  return arrUniqueValue[0];
};

console.log(firstUnique([1, 2, 3, 2, 1, 3, 4, 5, 5, 9]));

// 2. Напишите функцию chunkArray которая разбивает массив на подмассивы на заданное количество элементов. Пример:

// var result = chunkArray([1,2,3,4,5,6,7,8], 3);
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]

//**** solution ****/
const chunkArray = (arr, n) => {
  const newArr = [];
  let chunkArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    chunkArr.push(arr[i]);

    if (chunkArr.length === n) {
      newArr.push(chunkArr);
      chunkArr = [];
    }
  }

  newArr.push(chunkArr);

  return newArr;
};

const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(result);

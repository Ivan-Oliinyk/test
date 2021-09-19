//task9
// 9. Создайте прототип для String toTitleCase каждый первый символ строки переводит в верхний регистр. Пример:

// let x = 'test task'
// console.log(x.toTitleCase())
// // Outputs: Test Task

if (!String.prototype.toTitleCase) {
  String.prototype.toTitleCase = function () {
    const arrStr = this.split(" ");
    const newArrStr = [];

    for (let i = 0; i < arrStr.length; i += 1) {
      newArrStr.push(arrStr[i][0].toUpperCase() + arrStr[i].slice(1));
    }

    return newArrStr.join(" ");
  };
}

let x = "test task";
console.log(x.toTitleCase());

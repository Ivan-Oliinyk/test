//task10///////////////////////////////////////////////////////////////////////////////
// 10. Создайте прототип который удаляет дубликаты из строки. Пример:

// let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double"
// x.removeDuplicate()
// Int32 Double

let x =
  "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";

if (!String.prototype.removeDuplicate) {
  String.prototype.removeDuplicate = function () {
    const arrStr = this.split(" ");
    const newArrStr = [];

    for (let el of arrStr) {
      if (!newArrStr.includes(el)) {
        newArrStr.push(el);
      }
    }

    return newArrStr.join(" ");
  };
}

console.log(x.removeDuplicate());

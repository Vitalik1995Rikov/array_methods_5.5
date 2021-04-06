// этот вариант работает только в случае, когда я знаю что у меня есть конкретные элементы,
// просто они много раз повторяются, нужно убрать повторения

let arr = ['строка', 'пробел', 'точка', 'строка', 'точка'];

let newArr = [];

let firstElement = arr.find(item => item == 'строка');
let secondElement = arr.find(item => item == 'пробел');
let thirdElement = arr.find(item => item == 'точка');

console.log(newArr.concat(firstElement, secondElement, thirdElement));



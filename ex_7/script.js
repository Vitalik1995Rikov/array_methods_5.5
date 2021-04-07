let alex = { name: 'Alex', age: 25};
let alan = { name: 'Alan', age: 21};
let masha = { name: 'Masha', age: 20};

let arr = [alex, alan, masha];

let names = arr.map(item => item.name);
console.log(names); // было несложно, map перебирает массив и возвращает новый
let alex = { name: 'Alex', age: 25};
let alan = { name: 'Alan', age: 21};
let masha = { name: 'Masha', age: 20};

let arr = [alex, alan, masha];

function sortByAge(array) {
    return array.sort((age1, age2) => age1.age > age2.age ? 1 : -1);
}

console.log(sortByAge(arr)); // не слишком сложно, метод сортировки в целом понятен
// также ясен принцип по возрастанию/ убыванию
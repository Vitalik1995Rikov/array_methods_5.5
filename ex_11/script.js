let vasya = {name: 'Вася', age: 25};
let petya = {name: 'Петя', age: 30};
let masha = {name: 'Маша', age: 29};

let arr = [vasya, petya, masha];

function getAverageAge(humans) {
    return humans.reduce((summ, human) => summ + human.age, 0) / humans.length;
}

console.log(getAverageAge(arr));

// тяжко далась задача, разобрался с методом reduce